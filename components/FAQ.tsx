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
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <summary className="cursor-pointer font-semibold text-slate-900">
                {faq.question}
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}