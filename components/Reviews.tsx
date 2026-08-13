const reviews = [
  {
    id: 1,
    name: "Michael R.",
    text: "The booking process was simple and the chauffeur arrived exactly on time.",
  },
  {
    id: 2,
    name: "Sarah T.",
    text: "Clean vehicle, professional service and a very comfortable airport transfer.",
  },
  {
    id: 3,
    name: "Daniel K.",
    text: "A smooth experience from booking to drop-off. I would definitely use the service again.",
  },
];

export default function Reviews() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Reviews
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Trusted by Our Passengers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="leading-7 text-slate-600">
                “{review.text}”
              </p>

              <p className="mt-5 font-semibold text-slate-900">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}