import { ChevronLeft, ChevronRight } from 'lucide-react';
import {Home as HomeIcon, Search, Library} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
        <div className='flex itens-center gap-2'>
         <div className='w-3 h-3 bg-red-500 rounded-full'/>
         <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
         <div className='w-3 h-3 bg-green-500 rounded-full'/>
        </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm  font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>

            <a href="" className='flex items-center gap-3  text-sm  font-semibold text-zinc-200'>
              <Search />
              Search
              </a>

            <a href="" className='flex items-center gap-3  text-sm  font-semibold text-zinc-200'>
              <Library />
              Your Library
              </a>
          </nav>

        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hit Brasil</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 1</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Night Drive</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Made in France</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Modern Psychedelia</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>SoulFul Nights</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Indie Rock Hits</a>
        </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>


          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white/10 rounded overflow-hidden'> <Image src='/1.png' width={80} height={80}  alt="Capa da playlist"/></div>
            <div className='bg-white/10 rounded overflow-hidden'> <Image src='/2.png' width={80} height={80} alt="Capa da playlist"/></div>
            <div className='bg-white/10 rounded overflow-hidden'> <Image src='/3.png' width={80} height={80} alt="Capa da playlist"/></div>
            <div className='bg-white/10 rounded overflow-hidden'> <Image src='/4.png' width={80} height={80} alt="Capa da playlist"/></div>
            <div className='bg-white/10 rounded overflow-hidden'> <Image src='/5.png' width={80} height={80} alt="Capa da playlist"/></div>
            <div className='bg-white/10 rounded overflow-hidden'> <Image src='/7.png' width={80} height={80} alt="Capa da playlist"/></div>
          </div>
        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>

    </div>
  );
}
