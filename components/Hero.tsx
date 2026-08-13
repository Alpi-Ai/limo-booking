import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-hidden px-5 py-12 sm:px-6 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#A97845]">
            Private Chauffeur Service
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#172033] sm:text-5xl md:text-6xl lg:text-7xl">
            Move through the city with confidence.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            Premium private transportation for airport transfers, corporate
            travel, special events and long-distance journeys.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="rounded-full bg-[#172033] px-7 py-3.5 font-semibold text-white transition hover:bg-[#A97845]">
              Book a Ride
            </button>

            <button className="rounded-full border border-[#D7D1C7] bg-white px-7 py-3.5 font-semibold text-[#172033] transition hover:border-[#A97845]">
              Explore Fleet
            </button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#667085]">
            <span>Professional chauffeurs</span>
            <span>24/7 reservations</span>
            <span>Premium vehicles</span>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-[#EAE5DC] sm:aspect-[16/10] lg:aspect-[4/3]">
          <Image
            src="/images/hero-escalade.jpg"
            alt="Luxury Cadillac Escalade"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
            style={{ objectPosition: "center 58%" }}
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-4 left-4 right-4 max-w-max rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:bottom-6 sm:left-6 sm:px-5 sm:py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A97845] sm:text-xs">
              Premium Fleet
            </p>

            <p className="mt-1 text-sm font-semibold text-[#172033] sm:text-base">
              Executive & Luxury Vehicles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}