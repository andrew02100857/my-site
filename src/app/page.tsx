import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="py-20">
      <section className="mx-auto max-w-4xl rounded-2xl bg-white/70 backdrop-blur-md p-10 text-center shadow-md">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
          快速上線 · 穩定擴充
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
          把你的軟體服務<span className="text-orange-600"> 快速推向市場</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          我們用 Next.js + Vercel 架構，幫你以最小成本驗證商業模式，之後再無痛擴充會員、金流與後台。
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/contact">
            <Button className="bg-orange-600 hover:bg-orange-700">取得諮詢</Button>
          </Link>
          <a href="#features">
            <Button variant="outline">了解特色</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
