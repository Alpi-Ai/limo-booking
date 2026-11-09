const services = [
  {
    id: 1,
    number: "01",
    title: "Airport Transfers",
    description:
      "Reliable pickup and drop-off service for airport journeys, with a focus on timing and comfort.",
  },
  {
    id: 2,
    number: "02",
    title: "Corporate Travel",
    description:
      "Professional transportation for meetings, business travel and executive clients.",
  },
  {
    id: 3,
    number: "03",
    title: "Hourly Chauffeur",
    description:
      "Keep a professional chauffeur and vehicle available for a selected number of hours.",
  },
  {
    id: 4,
    number: "04",
    title: "Special Events",
    description:
      "Private transportation for weddings, celebrations, dinners and important occasions.",
  },
  {
    id: 5,
    number: "05",
    title: "City to City",
    description:
      "Comfortable long-distance transportation between cities with door-to-door service.",
  },
  {
    id: 6,
    number: "06",
    title: "VIP Service",
    description:
      "Premium transportation for clients who need additional privacy, comfort and flexibility.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7f2ed] px-5 py-20 sm:px-6 md:py-24"
    >

      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADING */}

        <div className="mb-10 max-w-3xl">

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c59655]">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171717] sm:text-[34px]">
            Transportation for Every Occasion
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#77716b]">
            Flexible chauffeur services for airport travel, business,
            celebrations and long-distance journeys.
          </p>

        </div>

        {/* SERVICES GRID */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <article
              key={service.id}
              className="group flex h-full flex-col rounded-[16px] border border-white/[0.08] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e3ae70]/50 hover:bg-[#191919] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
            >

              {/* GOLD ACCENT */}

              <div className="mb-6 h-[3px] w-10 rounded-full bg-[#e3ae70] transition-all duration-300 group-hover:w-16 group-hover:bg-[#c58b48]" />

              {/* NUMBER */}

              <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#e3ae70]">
                {service.number}
              </p>

              {/* TITLE */}

              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-3 flex-1 text-sm leading-7 text-[#99948c]">
                {service.description}
              </p>

              {/* LINK */}

              <a
                href="#booking"
                className="mt-6 inline-block w-fit text-xs font-bold text-[#e3ae70] transition-colors duration-300 hover:text-[#c58b48]"
              >
                Book a Ride →
              </a>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}