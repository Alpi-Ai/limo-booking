export default function FinalCTA() {
  return (
    <section className="bg-[#f7f2ed] px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto w-full max-w-6xl">

        <div className="rounded-[24px] border border-white/5 bg-[#111111] px-6 py-14 text-center shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:px-10 md:py-20">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a45f]">
            Ready When You Are
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Your Next Journey Starts Here
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-7 text-white/50 sm:text-sm">
            Enter your trip details, choose the right vehicle and reserve your
            chauffeur in just a few steps.
          </p>

          <a
            href="#booking"
            className="mt-8 inline-flex rounded-full bg-[#e3ae70] px-8 py-3.5 text-xs font-bold text-[#171717] transition-all duration-300 hover:bg-[#c58b48] hover:shadow-[0_5px_18px_rgba(197,139,72,0.25)]"
          >
            Book Your Ride →
          </a>

        </div>

      </div>
    </section>
  );
}