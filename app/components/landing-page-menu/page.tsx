"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Style khusus untuk item menu navbar agar transparan, teks putih, dan ukuran sedang (text-base / 16px)
const glossyMenuItemStyle =
  "inline-flex h-11 items-center justify-center rounded-full bg-transparent px-5 py-2 text-base font-semibold text-white transition-all hover:bg-emerald-400/20 hover:text-emerald-200 focus:bg-emerald-400/20 focus:text-emerald-200 focus:outline-none data-[state=open]:bg-emerald-400/25 data-[state=open]:text-emerald-200"

export default function Menulandingpage() {
  return (
    <NavigationMenu viewport={false} className="z-50 flex-1">
      <NavigationMenuList className="flex items-center gap-3">
        
        {/* MENU DROPDOWN: JURUSAN */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(glossyMenuItemStyle, "capitalize")}>
            <Link href="https://pyrotech.biz.id/">Profile</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        {/* MENU LINK: PROJECT */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(glossyMenuItemStyle, "capitalize")}>
            <Link href="https://pyrotech.biz.id/">Project</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* MENU LINK: DOCS */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(glossyMenuItemStyle, "capitalize")}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-emerald-500/25 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] focus:bg-emerald-500/25",
            className
          )}
        >
          <div className="flex flex-col gap-1.5">
            <div className="text-[15px] font-semibold leading-none text-emerald-100">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-emerald-200/75">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
