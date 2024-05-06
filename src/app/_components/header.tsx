'use client'

import Image from "next/image";
import DarkMode from "../_ui/darkmode";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navigation } from "../_consts/navigation";

function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



export default function Header () {
  const pathname = usePathname()
  return (
    <header className="flex justify-between items-center px-10 w-full bg-gradient-to-b from-slate-500 to-slate-400 dark:from-[#2f2c2c] dark:to-[#353d49]">
      <div className="flex justify-center items-center gap-12">
      <div className="flex justify-center items-center gap-3">
        <Image src='/cloud.png' alt="GBA Logo" width={100} height={100} />
        <h1 className="text-2xl text-black dark:text-white font-semibold">GBA Weather</h1>
        </div>
        <div className="flex justify-center items-center gap-3">
        {navigation.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.matches && item.matches.includes('/' + pathname?.split('/')[1] || '')
                  ? 'bg-gray-700/40 hover:bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                'rounded-md transition-all px-3 py-2 text-base font-ligth'
              )}
              aria-current={item.matches && item.matches.includes('/' + pathname?.split('/')[1] || '') ? 'page' : undefined}
            >
              {item.name}
            </Link>
          )
        })}
        </div>
      </div>
      <div>
        <DarkMode className="text-black dark:text-white h-6 w-6" />
      </div>
    </header>
  )
}