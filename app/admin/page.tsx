

export default function Admindashboard() {
    return (
        <div className="flex">
            <main className="flex-1 p-4">
                <h1 className="text-2xl font-bold mv-4">Admin Dashboard</h1>
                <p>Welcome to the admin dashboard.Here you can manage your application</p>
            </main>
        </div>
    )
}

// export default function Admindashboard() {
//   return (
//     <div className="relative flex min-h-screen w-full overflow-hidden bg-[linear-gradient(180deg,#ECFDF5_0%,#F8FAFC_45%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#022C22_0%,#031A14_50%,#000000_100%)]">
//       {/* Pendaran cahaya emerald lembut di bagian atas halaman */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -top-32 left-1/3 h-80 w-[600px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/15"
//       />

//       <main className="relative z-10 flex-1 p-6 md:p-8">
//         {/* Banner Header Glossy */}
//         <div className="relative overflow-hidden rounded-3xl border border-emerald-300/60 bg-[linear-gradient(180deg,rgba(16,185,129,0.92)_0%,rgba(6,78,59,0.96)_52%,rgba(2,44,34,0.99)_100%)] p-7 text-white shadow-[0_20px_45px_rgba(2,44,34,0.28),inset_0_2px_2px_rgba(255,255,255,0.65)]">
//           {/* Lapisan Kilau Kaca Diagonal */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_25%,rgba(255,255,255,0.22)_45%,rgba(255,255,255,0.04)_50%,transparent_70%)]"
//           />

//           <div className="relative z-10">
//             <span className="inline-block rounded-full border border-emerald-200/40 bg-white/15 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-100 uppercase backdrop-blur-md">
//               Panel Kontrol Utama
//             </span>
//             <h1 className="mt-3 text-2xl font-extrabold tracking-tight drop-shadow-sm sm:text-3xl">
//               Admin Dashboard
//             </h1>
//             <p className="mt-2 max-w-2xl text-sm leading-relaxed text-emerald-50/90 sm:text-base">
//               Welcome to the admin dashboard. Here you can manage your application, jurusan, artikel, and user data.
//             </p>
//           </div>
//         </div>

//         {/* Kartu Ringkasan / Quick Info dengan efek Frosted Glossy */}
//         <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="rounded-2xl border border-emerald-200/80 bg-white/85 p-5 shadow-[0_10px_30px_rgba(6,78,59,0.08),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-emerald-400/70 dark:border-emerald-800/50 dark:bg-emerald-950/40">
//             <p className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
//               Manajemen Konten
//             </p>
//             <h2 className="mt-1 text-lg font-bold text-emerald-950 dark:text-white">
//               Jurusan & Artikel
//             </h2>
//             <p className="mt-1.5 text-sm text-gray-600 dark:text-emerald-100/70">
//               Kelola informasi program keahlian dan publikasi berita sekolah melalui menu di samping.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-emerald-200/80 bg-white/85 p-5 shadow-[0_10px_30px_rgba(6,78,59,0.08),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-emerald-400/70 dark:border-emerald-800/50 dark:bg-emerald-950/40">
//             <p className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
//               Pengguna Sistem
//             </p>
//             <h2 className="mt-1 text-lg font-bold text-emerald-950 dark:text-white">
//               User Management
//             </h2>
//             <p className="mt-1.5 text-sm text-gray-600 dark:text-emerald-100/70">
//               Atur hak akses akun administrator dan pengelola portal SMK MVP ARS Internasional.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-emerald-200/80 bg-white/85 p-5 shadow-[0_10px_30px_rgba(6,78,59,0.08),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-emerald-400/70 dark:border-emerald-800/50 dark:bg-emerald-950/40">
//             <p className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
//               Konfigurasi
//             </p>
//             <h2 className="mt-1 text-lg font-bold text-emerald-950 dark:text-white">
//               Profile & Pengaturan
//             </h2>
//             <p className="mt-1.5 text-sm text-gray-600 dark:text-emerald-100/70">
//               Perbarui profil sekolah dan pengaturan umum aplikasi secara terpusat.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
