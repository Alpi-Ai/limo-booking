export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-slate-900">
            LIMO
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Premium private transportation for airport, corporate and personal
            journeys.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Company
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href="#">About</a>
            <a href="#">Fleet</a>
            <a href="#">Services</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Services
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href="#">Airport Transfers</a>
            <a href="#">Corporate Travel</a>
            <a href="#">Hourly Chauffeur</a>
            <a href="#">City to City</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>Toronto, Ontario</p>
            <p>info@example.com</p>
            <p>+1 000 000 0000</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
        © 2026 LIMO. All rights reserved.
      </div>
    </footer>
  );
}