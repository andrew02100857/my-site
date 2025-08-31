"use client";
import { useState } from "react";

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
        setErr(err instanceof Error ? err.message : String(err));
    } finally {
        setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-bold">聯絡我們</h1>
      <form className="mt-8 space-y-4" onSubmit={onSubmit}>
        <input name="name" placeholder="姓名" required className="w-full border rounded-lg p-3" />
        <input name="email" type="email" placeholder="Email" required className="w-full border rounded-lg p-3" />
        <textarea name="message" placeholder="想了解的內容" rows={5} className="w-full border rounded-lg p-3" />
        <button disabled={loading} className="border rounded-lg px-4 py-2">
          {loading ? "送出中..." : "送出"}
        </button>
        {ok && <p className="text-green-600">已送出，我們會盡快回覆！</p>}
        {err && <p className="text-red-600">{err}</p>}
      </form>
    </main>
  );
}
