const services = [
  {
    id: 1,
    title: "Airport Transfers",
    description:
      "Reliable pickup and drop-off service for airport journeys, with a focus on timing and comfort.",
  },
  {
    id: 2,
    title: "Corporate Travel",
    description:
      "Professional transportation for meetings, business travel and executive clients.",
  },
  {
    id: 3,
    title: "Hourly Chauffeur",
    description:
      "Keep a professional chauffeur and vehicle available for a selected number of hours.",
  },
  {
    id: 4,
    title: "Special Events",
    description:
      "Private transportation for weddings, celebrations, dinners and important occasions.",
  },
  {
    id: 5,
    title: "City to City",
    description:
      "Comfortable long-distance transportation between cities with door-to-door service.",
  },
  {
    id: 6,
    title: "VIP Service",
    description:
      "Premium transportation for clients who need additional privacy, comfort and flexibility.",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Our Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Transportation for Every Occasion
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Flexible chauffeur services for airport travel, business,
            celebrations and long-distance journeys.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              <button className="mt-6 text-sm font-semibold text-slate-900">
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}