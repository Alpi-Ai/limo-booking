const features = [
  {
    number: "01",
    title: "Professional Chauffeurs",
    description:
      "Experienced and professional drivers focused on comfort, safety and punctuality.",
    icon: "♧",
  },
  {
    number: "02",
    title: "24/7 Availability",
    description:
      "Transportation services available around the clock for early flights, late arrivals and special journeys.",
    icon: "◷",
  },
  {
    number: "03",
    title: "Transparent Pricing",
    description:
      "Clear pricing before confirmation so passengers understand their trip cost before booking.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Flight Monitoring",
    description:
      "Airport trips can be coordinated around flight information to provide a smoother pickup experience.",
    icon: "✈",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-[#f7f2ed] px-5 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">

        <div className="rounded-[20px] border border-white/5 bg-[#111111] px-5 py-10 shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:px-8 sm:py-12 md:px-10">

          <div className="mx-auto mb-10 max-w-2xl text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a45f]">
              About Us
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Reliable Transportation, Built Around Your Journey
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
              From airport pickups to corporate travel, we focus on comfort,
              reliability and a smooth booking experience.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (

              <div
                key={feature.number}
                className="group h-full rounded-xl border border-white/[0.08] bg-[#1b1b1a] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d9a45f]/50 hover:bg-[#22211f]"
              >

                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#d9a45f]/30 bg-[#d9a45f]/10 text-base text-[#d9a45f] transition duration-300 group-hover:bg-[#d9a45f] group-hover:text-black">
                  {feature.icon}
                </div>

                <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] text-[#d9a45f]/70">
                  {feature.number}
                </p>

                <h3 className="text-sm font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[11px] leading-[1.8] text-white/50">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}