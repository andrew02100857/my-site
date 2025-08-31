import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  if (!name || !email) {
    return NextResponse.json({ error: "缺少欄位" }, { status: 400 });
  }
  // 這裡先寫 log；之後可改成存 DB 或寄信（Resend/SendGrid）
  console.log("[CONTACT]", { name, email, message });
  return NextResponse.json({ ok: true });
}
