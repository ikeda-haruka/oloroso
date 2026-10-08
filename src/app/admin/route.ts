import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // /admin や /admin/ へのアクセスを Decap CMS 静的HTMLへ確実にリダイレクト
  const url = new URL("/admin/index.html", request.url);
  return NextResponse.redirect(url);
}
