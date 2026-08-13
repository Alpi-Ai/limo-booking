export default function WhyChooseUs() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Reliable Transportation, Built Around Your Journey
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            From airport pickups to corporate travel, we focus on comfort,
            reliability and a smooth booking experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Professional Chauffeurs
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Experienced and professional drivers focused on comfort, safety
              and punctuality.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              24/7 Availability
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Transportation services available around the clock for early
              flights, late arrivals and special journeys.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Transparent Pricing
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Clear pricing before confirmation so passengers understand their
              trip cost before booking.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Flight Monitoring
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Airport trips can be coordinated around flight information to
              provide a smoother pickup experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}