import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  if (!name || !email) {
    return NextResponse.json({ error: "缺少欄位" }, { status: 400 });
  }
  console.log("[CONTACT]", { name, email, message });
  return NextResponse.json({ ok: true });
}
