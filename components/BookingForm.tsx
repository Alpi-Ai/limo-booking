"use client";

import { useState } from "react";

export default function BookingForm() {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const params = new URLSearchParams();

    data.forEach((value, key) => {
      params.set(key, value.toString());
    });

    window.location.href = `/fleet?${params.toString()}`;
  }

  return (
    <section
      id="booking"
      className="scroll-mt-24 bg-[#f7f2ed] px-5 pt-12 pb-16 sm:px-8 md:pt-14 md:pb-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADING */}

        <div className="mb-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c59655]">
            Quick Booking
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
            Plan Your Journey
          </h2>

          <p className="mt-2 text-sm text-[#77716b]">
            Enter your trip details and we will show you the vehicles that fit
            your journey.
          </p>

        </div>

        {/* BOOKING FORM */}

        <form
          onSubmit={handleSubmit}
          className="rounded-[20px] border border-white/5 bg-[#111111] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.12)] sm:p-7"
        >

          {/* LOCATIONS */}

          <div className="mb-5 grid gap-4 md:grid-cols-2">

            <div>

              <label
                htmlFor="pickup"
                className="mb-2 block text-[11px] font-semibold text-white"
              >
                Pickup Location
              </label>

              <input
                id="pickup"
                name="pickup"
                type="text"
                required
                placeholder="Enter pickup location"
                className="h-11 w-full rounded-lg border border-white/10 bg-[#202020] px-3 text-xs text-white outline-none transition placeholder:text-[#999] focus:border-[#d9a45f]"
              />

            </div>

            <div>

              <label
                htmlFor="dropoff"
                className="mb-2 block text-[11px] font-semibold text-white"
              >
                Dropoff Location
              </label>

              <input
                id="dropoff"
                name="dropoff"
                type="text"
                required
                placeholder="Enter destination"
                className="h-11 w-full rounded-lg border border-white/10 bg-[#202020] px-3 text-xs text-white outline-none transition placeholder:text-[#999] focus:border-[#d9a45f]"
              />

            </div>

          </div>

          {/* DATE AND PASSENGERS */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div>

              <label
                htmlFor="date"
                className="mb-2 block text-[11px] font-semibold text-white"
              >
                Pickup Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                required
                min={today}
                value={pickupDate}
                onChange={(e) => {
                  setPickupDate(e.target.value);
                  setPickupTime("");
                }}
                className="h-10 w-full rounded-lg border border-white/10 bg-white px-3 text-xs text-black outline-none focus:border-[#d9a45f]"
              />

              <p className="mt-1 text-[9px] text-white/40">
                Book up to 90 days in advance.
              </p>

            </div>

            <div>

              <label
                htmlFor="time"
                className="mb-2 block text-[11px] font-semibold text-white"
              >
                Pickup Time
              </label>

              <input
                id="time"
                name="time"
                type="time"
                required
                disabled={!pickupDate}
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="h-10 w-full rounded-lg border border-white/10 bg-white px-3 text-xs text-black outline-none disabled:cursor-not-allowed disabled:bg-[#d8d8d8] focus:border-[#d9a45f]"
              />

              <p className="mt-1 text-[9px] text-white/40">
                Minimum 2 hours advance notice.
              </p>

            </div>

            <div>

              <label
                htmlFor="passengers"
                className="mb-2 block text-[11px] font-semibold text-white"
              >
                Passengers
              </label>

              <select
                id="passengers"
                name="passengers"
                required
                defaultValue=""
                className="h-10 w-full rounded-lg border border-white/10 bg-white px-3 text-xs text-black outline-none focus:border-[#d9a45f]"
              >
                <option value="" disabled>
                  Select passengers
                </option>

                {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Passenger" : "Passengers"}
                  </option>
                ))}

              </select>

            </div>

            <div>

              <label
                htmlFor="luggage"
                className="mb-2 block text-[11px] font-semibold text-white"
              >
                Luggage
              </label>

              <select
                id="luggage"
                name="luggage"
                required
                defaultValue=""
                className="h-10 w-full rounded-lg border border-white/10 bg-white px-3 text-xs text-black outline-none focus:border-[#d9a45f]"
              >
                <option value="" disabled>
                  Select luggage
                </option>

                {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Bag" : "Bags"}
                  </option>
                ))}

              </select>

            </div>

          </div>

          {/* FIND VEHICLES BUTTON */}

          <button
            type="submit"
            className="mt-5 h-11 w-full rounded-full bg-[#e3ae70] text-xs font-semibold text-[#171717] transition-all duration-300 hover:bg-[#c58b48] hover:shadow-[0_4px_15px_rgba(197,139,72,0.25)]"
          >
            Find Vehicles
          </button>

        </form>

      </div>
    </section>
  );
}