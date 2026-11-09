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
    <section className="bg-[#f7f2ed] px-5 py-16 sm:px-6 md:py-20">

      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADING */}

        <div className="mb-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c59655]">
            Reviews
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
            Trusted by Our Passengers
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#77716b]">
            Discover what makes our private transportation experience different.
          </p>

        </div>

        {/* REVIEW CARDS */}

        <div className="grid gap-5 md:grid-cols-3">

          {reviews.map((review) => (

            <article
              key={review.id}
              className="group rounded-[24px] border border-white/5 bg-[#111111] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9a45f]/40 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
            >

              {/* STARS */}

              <div className="mb-5 flex gap-1 text-sm tracking-wider text-[#d9a45f]">
                ★★★★★
              </div>

              {/* REVIEW TEXT */}

              <p className="text-xs leading-7 text-white/70 sm:text-[13px]">
                “{review.text}”
              </p>

              {/* DIVIDER */}

              <div className="my-5 h-px bg-white/10" />

              {/* CUSTOMER */}

              <p className="text-sm font-bold text-white">
                {review.name}
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9a45f]">
                Passenger
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}