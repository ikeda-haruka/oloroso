import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!code) {
    return renderResponse("error", JSON.stringify({ message: "認可コード（code）が提供されませんでした。" }));
  }

  if (!clientId || !clientSecret) {
    return renderResponse(
      "error",
      JSON.stringify({
        message: "GITHUB_CLIENT_ID または GITHUB_CLIENT_SECRET がVercelの環境変数に設定されていません。",
      })
    );
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.error || !data.access_token) {
      return renderResponse(
        "error",
        JSON.stringify(data)
      );
    }

    return renderResponse("success", JSON.stringify({
      token: data.access_token,
      provider: "github"
    }));
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "トークン取得処理中に予期せぬエラーが発生しました。";
    return renderResponse(
      "error",
      JSON.stringify({ message })
    );
  }
}

function renderResponse(status: "success" | "error", contentJson: string) {
  const messagePayload = `authorization:github:${status}:${contentJson}`;

  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>GitHub 認証処理中 - Estudio Oloroso CMS</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #faf7f2; color: #1c1917;">
  <div style="text-align: center; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); max-width: 400px;">
    <h3 style="margin-top: 0; color: #801336;">Estudio Oloroso CMS</h3>
    <p style="font-size: 14px; color: #666; margin-bottom: 0;">
      認証が完了しました。ウィンドウを閉じています...
    </p>
  </div>
  <script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          ${JSON.stringify(messagePayload)},
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
        window.close();
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
