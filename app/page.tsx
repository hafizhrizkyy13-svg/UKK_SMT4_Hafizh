"use client";
 
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MenuLandingPage from "@/app/components/landing-page-menu/page";
import { Button } from "@/components/ui/button";
import { LandingPageHero } from "@/app/components/landing-page-hero/page";
import { X, KeyRound, Mail, ArrowRight } from "lucide-react";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
 
export default function Home() {
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
 
  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError("");
 
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Login gagal.");
 
      setIsLoginOpen(false);
      setPassword("");
      router.push("/admin");
      router.refresh();
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login gagal.");
    } finally {
      setIsSubmitting(false);
    }
  }
 
  return (
    <main className="relative w-full bg-white dark:bg-black">
      <div className="relative z-0 -mt-24">
        <LandingPageHero />
      </div>

      <div className="absolute top-0 left-0 z-10 flex w-full flex-col items-center">
        {/* NAVBAR: Deep Emerald High-Glossy Glass (Gelap mengkilap agar kontras dengan Hero) */}
        <div className="relative mx-8 mt-4 flex h-20 w-[95%] items-center overflow-hidden rounded-[70px] border border-emerald-200/50 bg-[linear-gradient(180deg,rgba(52,211,153,0.45)_0%,rgba(6,78,59,0.88)_48%,rgba(2,44,34,0.96)_52%,rgba(2,44,34,0.98)_100%)] p-4 shadow-[0_15px_35px_rgba(2,44,34,0.65),inset_0_2px_2px_rgba(255,255,255,0.7),inset_0_-2px_6px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          
          {/* Efek Kilau Kaca Melintang di Navbar */}
          <div 
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.22)_45%,rgba(255,255,255,0.05)_50%,transparent_70%)]"
          />

          {/* Logo */}
<div className="relative z-10 flex h-37.5 w-75 items-center justify-start rounded-[120px]">
            <Image
              className="object-contain object-left p-2.5 drop-shadow-[0_0_6px_rgba(16,185,129,0.45)]"
              src="/img/hapiz-hacker.png"
              alt="Hapiz Hacker MVP"
              fill
              sizes="200px"
              priority
            />
          </div>

          {/* Menu */}
          <div className="relative z-10 flex flex-1 items-center justify-center">
            <MenuLandingPage />
          </div>

          {/* TOMBOL LOGIN NAVBAR: Pearl White / Silver Glossy dengan teks Emerald Gelap */}
          <div className="relative z-10 flex items-center justify-end p-4">
            <Button
              onClick={() => {
                setLoginError("");
                setIsLoginOpen(true);
              }}
              className="rounded-full border border-white bg-[linear-gradient(180deg,#FFFFFF_0%,#ECFDF5_48%,#D1FAE5_52%,#A7F3D0_100%)] px-7 py-5 text-[16px] font-bold text-emerald-950 shadow-[inset_0_2px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(6,78,59,0.25),0_6px_18px_rgba(2,44,34,0.45)] transition-all hover:brightness-105 active:scale-95"
              size="lg"
            >
              Login
            </Button>
          </div>
        </div>
        
        {/* MODAL LOGIN: Frosted Emerald-Tinted Glass dengan Tombol Jewel Emerald Glossy */}
        {isLoginOpen && (
          <div className="relative mx-auto my-8 flex w-full max-w-md flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-emerald-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(236,253,245,0.95)_100%)] p-7 shadow-[0_25px_60px_rgba(2,44,34,0.6),inset_0_2px_3px_rgba(255,255,255,1)] backdrop-blur-2xl dark:border-emerald-500/40 dark:bg-[linear-gradient(180deg,rgba(6,78,59,0.95)_0%,rgba(2,44,34,0.98)_100%)]">
            
            {/* Kilau Kaca Halus di Sudut Atas Modal */}
            <div 
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-400/25 blur-2xl"
            />

            <div className="relative z-10 mb-2 flex w-full items-center justify-between">
              <h3 className="text-xl font-extrabold tracking-tight text-emerald-950 dark:text-emerald-200">
                Silakan Login
              </h3>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full text-emerald-800 hover:bg-emerald-200/60 dark:text-emerald-200 dark:hover:bg-emerald-800/50"
                onClick={() => setIsLoginOpen(false)}
                disabled={isSubmitting}
              >
                <X />
              </Button>
            </div>

            <form onSubmit={handleLogin} className="relative z-10 flex w-full flex-col gap-4">
              <Field className="w-full">
                <FieldLabel htmlFor="email-input" className="font-semibold text-emerald-950 dark:text-emerald-100">
                  Email
                </FieldLabel>
                <InputGroup className="border-emerald-300/80 bg-white/90 shadow-inner focus-within:border-emerald-500">
                  <InputGroupAddon align="inline-start">
                    <Mail className="size-4 text-emerald-600" />
                  </InputGroupAddon>
                  <InputGroupInput 
                    id="email-input" 
                    type="email" 
                    placeholder="nama@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </InputGroup>
              </Field>

              <Field className="w-full">
                <FieldLabel htmlFor="password-input" className="font-semibold text-emerald-950 dark:text-emerald-100">
                  Password
                </FieldLabel>
                <InputGroup className="border-emerald-300/80 bg-white/90 shadow-inner focus-within:border-emerald-500">
                  <InputGroupAddon align="inline-start">
                    <KeyRound className="size-4 text-emerald-600" />
                  </InputGroupAddon>
                  <InputGroupInput 
                    id="password-input" 
                    type="password" 
                    placeholder="Masukkan password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </InputGroup>
              </Field>

              {loginError && (
                <p role="alert" className="rounded-xl border border-red-300 bg-red-50/90 p-3 text-sm font-medium text-red-700 shadow-sm">
                  {loginError}
                </p>
              )}

              <div className="mt-3 flex justify-end gap-2">
                {/* TOMBOL SUBMIT MODAL: Jewel Emerald High-Glossy (Kilap Permata Zamrud) */}
                <Button 
                  type="submit" 
                  className="w-full rounded-xl border border-emerald-300/90 bg-[linear-gradient(180deg,#6EE7B7_0%,#10B981_48%,#047857_52%,#064E3B_100%)] py-5 text-[15px] font-bold text-white shadow-[inset_0_2px_2px_rgba(255,255,255,0.85),inset_0_-2px_5px_rgba(2,44,34,0.65),0_8px_22px_rgba(16,185,129,0.5)] transition-all hover:brightness-110 active:scale-[0.98]" 
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? "Memverifikasi..." : "Login"}</span>
                  {!isSubmitting && <ArrowRight className="ml-2 size-4" />}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
