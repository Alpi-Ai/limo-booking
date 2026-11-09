export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#111111] text-white shadow-[0_4px_15px_rgba(0,0,0,0.12)]">

      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-7">

        {/* LOGO */}

        <a
          href="#home"
          className="shrink-0 text-[15px] font-bold tracking-[0.055em] text-[#e3ae70] transition-colors duration-300 hover:text-[#c58b48]"
        >
          torontariolimo.ca
        </a>

        {/* NAVIGATION */}

        <div className="hidden items-center gap-7 md:flex">

          <a
            href="#home"
            className="text-[12px] font-medium text-white/85 transition-colors duration-300 hover:text-[#e3ae70]"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-[12px] font-medium text-white/85 transition-colors duration-300 hover:text-[#e3ae70]"
          >
            Services
          </a>

          <a
            href="#fleet"
            className="text-[12px] font-medium text-white/85 transition-colors duration-300 hover:text-[#e3ae70]"
          >
            Fleet
          </a>

          <a
            href="#about"
            className="text-[12px] font-medium text-white/85 transition-colors duration-300 hover:text-[#e3ae70]"
          >
            About Us
          </a>

          <a
            href="#faq"
            className="text-[12px] font-medium text-white/85 transition-colors duration-300 hover:text-[#e3ae70]"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="text-[12px] font-medium text-white/85 transition-colors duration-300 hover:text-[#e3ae70]"
          >
            Contact
          </a>

        </div>

        {/* ACTION BUTTONS */}

        <div className="flex shrink-0 items-center gap-4">

          <button
            className="hidden text-[12px] font-semibold text-[#e3ae70] transition-colors duration-300 hover:text-[#c58b48] sm:block"
          >
            Sign In
          </button>

          <a
            href="#booking"
            className="rounded-full bg-[#e3ae70] px-6 py-2.5 text-xs font-semibold text-[#171717] transition-all duration-300 hover:bg-[#c58b48] hover:shadow-[0_4px_15px_rgba(197,139,72,0.25)]"
          >
            Book a Ride
          </a>

        </div>

      </nav>

    </header>
  );
}