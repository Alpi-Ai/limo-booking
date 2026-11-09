import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#f5f1e9] px-5 pt-16 pb-12 sm:px-8 md:pt-24 md:pb-14"
    >

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div>

          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b58a4d]">
            Private Chauffeur Service
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#171715] sm:text-5xl md:text-6xl">
            Move through the city with confidence.
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#77746e] sm:text-base">
            Premium private transportation for airport transfers,
            corporate travel, special events and long-distance journeys.
          </p>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#booking"
              className="rounded-full bg-[#111111] px-7 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#c58b48] hover:text-[#171717]"
            >
              Book a Ride
            </a>

            <a
              href="#fleet"
              className="rounded-full border border-[#d7d0c4] bg-white px-7 py-3.5 text-xs font-bold text-[#171715] transition-all duration-300 hover:border-[#c58b48] hover:bg-[#c58b48] hover:text-[#171717]"
            >
              Explore Fleet
            </a>

          </div>

          {/* FEATURES */}

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-medium text-[#77746e]">

            <span>✓ Professional chauffeurs</span>

            <span>✓ 24/7 reservations</span>

            <span>✓ Premium vehicles</span>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative">

          <div className="group relative aspect-[5/4] overflow-hidden rounded-[20px] bg-[#191919] shadow-xl">

            <Image
              src="/images/hero-escalade.jpg"
              alt="Luxury Cadillac Escalade"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center 58%" }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* PREMIUM FLEET BADGE */}

            <div className="absolute bottom-3 left-5 rounded-xl border border-white/10 bg-[#111111]/95 px-4 py-3 shadow-xl backdrop-blur">

              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#d9a45f]">
                Premium Fleet
              </p>

              <p className="mt-1 text-[10px] font-bold leading-4 text-white">
                Executive & Luxury Vehicles
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}