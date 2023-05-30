import { Home as HomeIcon, Search, Library } from "lucide-react";
import Image from "next/image";

export default function Sidebar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex itens-center gap-2">
            <div className="rounded overflow-hidden">
              {" "}
              <Image
                src="/Spotify_Logo_CMYK_Green.png"
                width={120}
                height={120}
                alt="Capa da playlist"
              />
            </div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm  font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>

            <a
              href=""
              className="flex items-center gap-3  text-sm  font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>

            <a
              href=""
              className="flex items-center gap-3  text-sm  font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hit Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daily Mix 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Night Drive
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Made in France
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Modern Psychedelia
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              SoulFul Nights
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Indie Rock Hits
            </a>
          </nav>
        </aside>
    )
}

