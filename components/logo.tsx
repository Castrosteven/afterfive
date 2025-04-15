import Link from "next/link"
import { Wine } from "lucide-react"

const Logo = ()=>{
    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center gap-3">
                {/* Logo Icon */}
                <div className="relative w-9 h-9 flex items-center justify-center">
                  <Wine className="w-6 h-6 text-main group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl sm:text-3xl font-black tracking-tighter bg-gradient-to-r from-main to-main/80 bg-clip-text text-transparent group-hover:from-main/80 group-hover:to-main transition-all lowercase">
                      after
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-main">5</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-foreground/60 -mt-1 tracking-[0.2em] lowercase">new york city</span>
                </div>
              </div>
            </Link>
          </div>
    )
}

export default Logo