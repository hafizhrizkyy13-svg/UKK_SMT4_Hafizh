import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  Settings,
  UsersRound,
  House,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const listMenu = [
  {
    name: "Dashboard",
    url: "/admin",
    icon: House,
  },
  {
    name: "User Management",
    url: "/admin/user-management",
    icon: UsersRound,
  },
];

// Style seragam untuk setiap item menu sidebar dengan efek hover emerald glossy
const glossySidebarItemClass =
  "rounded-xl text-emerald-50/90 transition-all duration-200 hover:bg-emerald-400/20 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_4px_12px_rgba(2,44,34,0.35)] active:bg-emerald-500/30";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-emerald-300/30 [&>div]:bg-emerald-950 [&>div]:text-white">
      {/* Kontainer Utama: Deep Emerald High-Glossy */}
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-[linear-gradient(180deg,#059669_0%,#064E3B_32%,#022C22_100%)] text-white shadow-[inset_0_2px_2px_rgba(255,255,255,0.5)]">
        
        {/* Lapisan Kilau Kaca Diagonal (Glossy Reflection) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.05)_28%,transparent_55%)]"
        />

        {/* Header Logo: Dark Emerald Glass dengan pemisah kilap tipis */}
<SidebarHeader className="relative z-10 overflow-hidden border-b border-emerald-300/25 bg-emerald-950/60 p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] backdrop-blur-md">
          <div className="flex w-full items-center justify-center">
            <Image
              src="/img/hapiz-hacker.png"
              alt="Hapiz Hacker MVP"
              width={600}
              height={220}
              className="h-auto w-full translate-x-[12%] scale-125 object-contain drop-shadow-[0_0_12px_rgba(52,211,153,0.45)]"
              priority
            />
          </div>
        </SidebarHeader>

        {/* Content Menu */}
        <SidebarContent className="relative z-10 bg-transparent px-2 py-3">
          <SidebarGroup>
            <SidebarGroupLabel className="mb-2 px-2 text-xs font-bold tracking-wider text-emerald-200/80 uppercase">
              Menu Utama
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1.5">
                {/* 1. Menu dari array listMenu */}
                {listMenu.map((menu) => (
                  <SidebarMenuItem key={menu.name}>
                    <SidebarMenuButton asChild className={glossySidebarItemClass}>
                      <Link href={menu.url}>
                        <menu.icon className="mr-2 h-4 w-4 text-emerald-300" />
                        <span className="font-medium">{menu.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* Pengaturan */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={glossySidebarItemClass}>
                    <Link href="/admin/pengaturan">
                      <Settings className="mr-2 h-4 w-4 text-emerald-300" />
                      <span className="font-medium">Pengaturan</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer Sidebar Transparan agar menyatu dengan gradien bawah */}
        <SidebarFooter className="relative z-10 border-t border-emerald-400/15 bg-emerald-950/40 p-3" />
      </div>
    </Sidebar>
  );
}
