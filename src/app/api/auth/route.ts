import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      {
        error: "GITHUB_CLIENT_ID が設定されていません。VercelのEnvironment Variablesに GITHUB_CLIENT_ID を設定してください。",
      },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const scope = searchParams.get("scope") || "repo,user";
  const state = Math.random().toString(36).substring(7);

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set("state", state);

  return NextResponse.redirect(authUrl.toString());
}
