export function LandingPageHero() {
    return (
        <section className="relative flex min-h-[119vh] w-full items-center justify-center overflow-hidden bg-linear-to-b from-emerald-500 via-emerald-700 to-emerald-950 px-6 text-center shadow-[inset_0_2px_20px_rgba(255,255,255,0.25)] dark:from-emerald-950 dark:via-black dark:to-black">
            {/* Efek kilau cahaya (glossy highlight) di bagian atas */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl"
            />

            <div className="relative z-10 max-w-3xl text-white">
                <h1 className="text-4xl font-bold tracking-tight drop-shadow-sm sm:text-6xl">
                    SMK MVP ARS Internasional
                </h1>
            </div>
        </section>
    )
}
