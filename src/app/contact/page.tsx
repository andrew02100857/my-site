"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setOk(false); setErr(null);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setOk(true);
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: unknown) {
      setErr(err instanceof Error ? err.message : "送出失敗");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl py-16">
      <div className="rounded-2xl bg-white/70 backdrop-blur-md p-8 shadow-md">
        <h1 className="text-2xl font-bold">聯絡我們</h1>
        <p className="mt-2 text-sm text-gray-600">
          填寫後我們會在 1–2 個工作天內回覆你。
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input id="name" name="name" placeholder="王小明" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">想了解的內容</Label>
            <Textarea id="message" name="message" rows={5} placeholder="告訴我們你的需求或想法..." />
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading} className="bg-orange-600 hover:bg-orange-700">
              {loading ? "送出中..." : "送出"}
            </Button>
            {ok && <span className="text-green-600">已送出，我們會盡快回覆！</span>}
            {err && <span className="text-red-600">{err}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
