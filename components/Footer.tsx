export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#111111] px-5 py-14 sm:px-6">

      <div className="mx-auto w-full max-w-6xl">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div>

            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-[#d9a45f] transition-colors duration-300 hover:text-[#e3ae70]"
            >
              torontariolimo.ca
            </a>

            <p className="mt-4 max-w-xs text-xs leading-7 text-white/50">
              Premium private transportation for airport, corporate and
              personal journeys.
            </p>

            <div className="mt-5 h-[2px] w-10 rounded-full bg-[#d9a45f]" />

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-xs text-white/50">

              <a
                href="#about"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                About Us
              </a>

              <a
                href="#fleet"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                Fleet
              </a>

              <a
                href="#services"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                Services
              </a>

              <a
                href="#faq"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                FAQ
              </a>

            </div>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-xs text-white/50">

              <a
                href="#services"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                Airport Transfers
              </a>

              <a
                href="#services"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                Corporate Travel
              </a>

              <a
                href="#services"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                Hourly Chauffeur
              </a>

              <a
                href="#services"
                className="transition-colors duration-300 hover:text-[#d9a45f]"
              >
                City to City
              </a>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              {/* ADDRESS */}

              <div>

                <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9a45f]">
                  Address
                </p>

                <p className="text-xs leading-6 text-white/55">
                  2020 Bathurst St.
                  <br />
                  Toronto, ON M5P 0A6
                  <br />
                  Canada
                </p>

              </div>

              {/* PHONE */}

              <div>

                <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9a45f]">
                  Phone
                </p>

                <a
                  href="tel:+14373358435"
                  className="text-xs text-white/60 transition-colors duration-300 hover:text-[#e3ae70]"
                >
                  +1 (437) 335-8435
                </a>

              </div>

              {/* EMAIL */}

              <div>

                <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9a45f]">
                  Email
                </p>

                <a
                  href="mailto:info.johngokce@gmail.com"
                  className="break-all text-xs text-white/60 transition-colors duration-300 hover:text-[#e3ae70]"
                >
                  info.johngokce@gmail.com
                </a>

              </div>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/14373358435"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/25 bg-[#25D366]/[0.06] px-4 py-2.5 text-xs font-semibold text-[#25D366] transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/15"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
                  <path d="M9 9a1 1 0 0 1 1-1h.5a1 1 0 0 1 .9.6l.7 1.6a1 1 0 0 1-.2 1.1l-.5.5a6 6 0 0 0 2.3 2.3l.5-.5a1 1 0 0 1 1.1-.2l1.6.7a1 1 0 0 1 .6.9v.5a1 1 0 0 1-1 1A8 8 0 0 1 9 9z" />
                </svg>

                WhatsApp Us

              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 sm:flex-row">

          <p className="text-center text-[10px] text-white/35 sm:text-left">
            © 2026 Toronto Rio Limo. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-[10px] font-medium text-white/40 transition-colors duration-300 hover:text-[#d9a45f]"
          >
            Back to Top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}