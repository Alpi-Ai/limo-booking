export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E2DA] bg-[#F6F4EF]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-xl font-bold tracking-[0.18em] text-[#172033]"
        >
          LIMO
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-[#667085] transition hover:text-[#172033]"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-[#667085] transition hover:text-[#172033]"
          >
            Services
          </a>

          <a
            href="#fleet"
            className="text-sm font-medium text-[#667085] transition hover:text-[#172033]"
          >
            Fleet
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-[#667085] transition hover:text-[#172033]"
          >
            About
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-[#667085] transition hover:text-[#172033]"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden px-4 py-2 text-sm font-semibold text-[#172033] transition hover:text-[#A97845] md:block">
            Sign In
          </button>

          <button className="rounded-full bg-[#172033] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#A97845]">
            Book a Ride
          </button>

          <button
            className="rounded-full border border-[#E6E2DA] px-3 py-2 text-[#172033] lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}