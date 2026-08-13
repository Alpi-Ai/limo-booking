const steps = [
  {
    id: 1,
    number: "01",
    title: "Enter Your Trip",
    description:
      "Tell us your pickup location, destination, date, time and passenger details.",
  },
  {
    id: 2,
    number: "02",
    title: "Choose Your Vehicle",
    description:
      "See the vehicles that match your passenger and luggage requirements.",
  },
  {
    id: 3,
    number: "03",
    title: "Continue Your Way",
    description:
      "Continue as a guest or sign in to your account to manage your booking.",
  },
  {
    id: 4,
    number: "04",
    title: "Confirm & Pay",
    description:
      "Review your trip, choose your payment method and confirm your reservation.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            How It Works
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Book Your Ride in Four Simple Steps
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm font-bold text-slate-400">
                {step.number}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}