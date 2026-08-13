export default function BookingForm() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Quick Booking
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Plan Your Journey
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Enter your trip details and we will show you the vehicles that fit
            your journey.
          </p>
        </div>

        <form className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <label
              htmlFor="pickup"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Pickup Location
            </label>

            <input
              id="pickup"
              type="text"
              placeholder="Enter pickup location"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </div>

          <div className="lg:col-span-2">
            <label
              htmlFor="dropoff"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Dropoff Location
            </label>

            <input
              id="dropoff"
              type="text"
              placeholder="Enter destination"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Pickup Date
            </label>

            <input
              id="date"
              type="date"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Pickup Time
            </label>

            <input
              id="time"
              type="time"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </div>

          <div>
            <label
              htmlFor="passengers"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Passengers
            </label>

            <select
              id="passengers"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            >
              <option value="">Select</option>
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5 Passengers</option>
              <option value="6">6 Passengers</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="luggage"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Luggage
            </label>

            <select
              id="luggage"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            >
              <option value="">Select</option>
              <option value="0">No luggage</option>
              <option value="1">1 Bag</option>
              <option value="2">2 Bags</option>
              <option value="3">3 Bags</option>
              <option value="4">4 Bags</option>
              <option value="5">5 Bags</option>
              <option value="6">6 Bags</option>
            </select>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Find Vehicles
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}