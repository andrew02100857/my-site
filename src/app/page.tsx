import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* 背景圖片層 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/building-background.jpg')",
          filter: "brightness(0.6)"
        }}
      />
      
      {/* 左側導航 */}
      <nav className="fixed left-0 top-0 h-full bg-black/90 backdrop-blur-sm p-6 z-20 hidden md:block">
        <Link href="/" className="block mb-12">
          <div className="bg-black border-2 border-white px-4 py-2">
            <span className="text-white font-bold text-sm tracking-widest">DRAMA TECH</span>
          </div>
        </Link>
        
        <ul className="space-y-6 text-white">
          <li>
            <Link href="#about" className="hover:text-orange-500 transition-colors text-sm font-medium">
              關於抓馬
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-orange-500 transition-colors text-sm font-medium">
              服務介紹
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-orange-500 transition-colors text-sm font-medium">
              聯絡我們
            </Link>
          </li>
        </ul>
      </nav>

      {/* 主要內容 */}
      <div className="relative z-10 md:ml-48 px-6">
        {/* 中央 Logo */}
        <div className="flex justify-center mb-16">
          <div className="bg-black px-12 py-8 rounded-lg">
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-[0.3em] text-center">
              DRAMA
              <br />
              TECH
            </h1>
          </div>
        </div>

        {/* 標語與說明 */}
        <section className="mx-auto max-w-4xl rounded-2xl bg-black/80 backdrop-blur-md p-10 text-center shadow-2xl">
          <span className="inline-block rounded-full bg-orange-500 px-4 py-2 text-xs font-medium text-white">
            快速上線 · 穩定擴充
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl text-white">
            把你的軟體服務<span className="text-orange-500"> 快速推向市場</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-300 text-lg">
            我們用 Next.js + Vercel 架構，幫你以最小成本驗證商業模式，之後再無痛擴充會員、金流與後台。
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                取得諮詢
              </Button>
            </Link>
            <Link href="#features">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
              >
                了解特色
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}