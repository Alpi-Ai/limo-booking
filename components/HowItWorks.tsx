const steps = [
  {
    number: "01",
    title: "Enter Your Trip",
    description:
      "Tell us your pickup location, destination, preferred date and time, number of passengers and luggage details so we can understand your travel requirements.",
  },
  {
    number: "02",
    title: "Choose Your Vehicle",
    description:
      "Explore our premium fleet and compare available vehicles based on passenger capacity, luggage space and comfort to find the perfect match for your journey.",
  },
  {
    number: "03",
    title: "Continue Your Way",
    description:
      "Continue your reservation as a guest or sign in to your account. Review your journey details and manage your booking with ease.",
  },
  {
    number: "04",
    title: "Confirm & Pay",
    description:
      "Review your trip information, select your preferred payment method and confirm your reservation. Your chauffeur journey is almost ready.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f2ed] px-5 py-20 sm:px-6 md:py-24">

      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADER */}

        <div className="mb-10 max-w-3xl">

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c59655]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171717] sm:text-[34px]">
            Book Your Ride in Four Simple Steps
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#77716b] sm:text-base">
            A simple and convenient booking experience from start to finish.
          </p>

        </div>

        {/* STEPS GRID */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (

            <article
              key={step.number}
              className="group min-h-[190px] rounded-[25px] border border-white/[0.06] bg-[#111111] p-6 shadow-[0_8px_22px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9a45f]/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.13)] sm:p-7"
            >

              {/* STEP NUMBER */}

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9a45f]/40 bg-[#d9a45f]/[0.10] text-xs font-bold text-[#d9a45f] transition-colors duration-300 group-hover:bg-[#d9a45f] group-hover:text-[#171717]">
                {step.number}
              </div>

              {/* TITLE */}

              <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-white">
                {step.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-3 text-xs leading-6 text-white/55 sm:text-[13px]">
                {step.description}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}