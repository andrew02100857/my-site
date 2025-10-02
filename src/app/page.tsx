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
      <div className="relative z-10 flex items-center justify-center">
        {/* 中央 Logo 圖片 */}
        <div className="bg-black px-16 py-12 rounded-lg">
          <img 
            src="/logo.png" 
            alt="DRAMA TECH Logo" 
            className="w-auto h-48 md:h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
}