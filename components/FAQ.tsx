const faqs = [
  {
    id: 1,
    question: "How far in advance should I book?",
    answer:
      "Booking in advance is recommended, especially for airport transfers, weekends and special events.",
  },
  {
    id: 2,
    question: "Can I book without creating an account?",
    answer:
      "Yes. You can continue as a guest and complete your reservation without creating an account.",
  },
  {
    id: 3,
    question: "What happens if my flight is delayed?",
    answer:
      "Airport bookings can include flight information so the pickup can be coordinated around arrival updates.",
  },
  {
    id: 4,
    question: "Can I pay by card or cash?",
    answer:
      "Available payment options will be shown during checkout before you confirm your booking.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#f7f2ed] px-5 py-16 sm:px-6 md:py-20"
    >

      <div className="mx-auto w-full max-w-6xl">

        {/* SECTION HEADING */}

        <div className="mb-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c59655]">
            FAQ
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#77716b]">
            Everything you need to know before booking your journey.
          </p>

        </div>

        {/* FAQ ITEMS */}

        <div className="space-y-4">

          {faqs.map((faq) => (

            <details
              key={faq.id}
              className="group rounded-[22px] border border-white/5 bg-[#111111] p-5 shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#d9a45f]/40 sm:p-6"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white marker:content-none">

                {faq.question}

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d9a45f]/25 text-lg font-light text-[#d9a45f] transition-all duration-300 group-open:rotate-45 group-open:bg-[#d9a45f] group-open:text-[#171717]">
                  +
                </span>

              </summary>

              <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-7 text-white/55 sm:text-sm">
                {faq.answer}
              </p>

            </details>

          ))}

        </div>

      </div>

    </section>
  );
}