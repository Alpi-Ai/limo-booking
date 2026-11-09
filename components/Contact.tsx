export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#f7f2ed] px-5 py-16 sm:px-6 md:py-20"
      >
        <div className="mx-auto max-w-6xl">

          {/* SECTION HEADING */}

          <div className="mb-8 max-w-2xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c59655]">
              Contact Us
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
              We're Here for Your Journey
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#77716b]">
              Have a question about your reservation, airport pickup or
              chauffeur service? Contact us directly or find us in Toronto.
            </p>

          </div>

          {/* CONTACT CONTAINER */}

          <div className="grid overflow-hidden rounded-[24px] bg-[#111111] shadow-xl lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT CONTACT INFORMATION */}

            <div className="p-7 sm:p-9 md:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e8b477]">
                TORONTARIOLIMO.CA
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Contact Information
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                Our team is available to assist with bookings, trip
                information and chauffeur service questions.
              </p>

              {/* ADDRESS */}

              <div className="mt-7 rounded-[20px] border border-white/10 bg-[#191919] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8b477]">
                  Address
                </p>

                <p className="mt-2 text-sm leading-5 text-white">
                  2020 Bathurst St.
                  <br />
                  Toronto, ON M5P 0A6
                  <br />
                  Canada
                </p>

              </div>

              {/* PHONE */}

              <div className="mt-3 rounded-[20px] border border-white/10 bg-[#191919] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8b477]">
                  Phone
                </p>

                <a
                  href="tel:+14373358435"
                  className="mt-2 block text-sm font-semibold text-white transition-colors duration-300 hover:text-[#e8b477]"
                >
                  +1 (437) 335-8435
                </a>

              </div>

              {/* EMAIL */}

              <div className="mt-3 rounded-[20px] border border-white/10 bg-[#191919] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8b477]">
                  Email
                </p>

                <a
                  href="mailto:info.johngokce@gmail.com"
                  className="mt-2 block break-all text-sm font-semibold text-white transition-colors duration-300 hover:text-[#e8b477]"
                >
                  info.johngokce@gmail.com
                </a>

              </div>

              {/* BOOK BUTTON */}

              <a
                href="#booking"
                className="mt-6 inline-flex rounded-full bg-[#e3ae70] px-7 py-3.5 text-sm font-semibold text-[#171717] transition-all duration-300 hover:bg-[#c58b48] hover:shadow-[0_4px_15px_rgba(197,139,72,0.25)]"
              >
                Book a Ride
              </a>

            </div>

            {/* GOOGLE MAP */}

            <div className="relative min-h-[350px] bg-[#191919] lg:min-h-full">

              <iframe
                title="Toronto Rio Limo Location"
                src="https://maps.google.com/maps?q=2020%20Bathurst%20St%2C%20Toronto%2C%20ON%20M5P%200A6%2C%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "350px",
                  filter: "grayscale(100%) brightness(0.75)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

            </div>

          </div>

        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href="https://wa.me/14373358435"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 hover:bg-[#1da851] sm:bottom-7 sm:right-7"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.5 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l118.4-31.1c32.6 17.8 69.3 27.2 105.4 27.2h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.1-115-67.1-157zm-157 341.6c-33 0-65.4-8.9-93.7-25.7l-6.7-4-70.3 18.4 18.8-68.5-4.4-7.1c-18.6-29.6-28.4-63.7-28.4-98.8C39.2 151.1 122 68.4 224 68.4c49.5 0 96 19.3 131 54.3s56.2 81.8 56.1 131.3c0 102-85.2 184.7-187.2 184.7zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.5 21.7-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.4 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.7 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>

      </a>
    </>
  );
}