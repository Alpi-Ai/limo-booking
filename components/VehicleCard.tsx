import Image from "next/image";

type VehicleCardProps = {
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  price: string;
  image: string;
};

export default function VehicleCard({
  name,
  category,
  passengers,
  luggage,
  price,
  image,
}: VehicleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#111111] shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e3ae70]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]">

      {/* VEHICLE IMAGE */}

      <div className="relative h-[190px] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-[#191919]">

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />

      </div>

      {/* VEHICLE INFORMATION */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* CATEGORY */}

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e3ae70]">
          {category}
        </p>

        {/* NAME */}

        <h3 className="mt-2 min-h-[26px] text-[19px] font-semibold tracking-tight text-white">
          {name}
        </h3>

        {/* PASSENGERS AND LUGGAGE */}

        <div className="mt-4 flex flex-wrap items-center gap-2">

          <span className="rounded-full border border-white/[0.09] bg-[#202020] px-3 py-1.5 text-[10px] font-medium text-white/75">
            {passengers} passengers
          </span>

          <span className="rounded-full border border-white/[0.09] bg-[#202020] px-3 py-1.5 text-[10px] font-medium text-white/75">
            {luggage} bags
          </span>

        </div>

        {/* DIVIDER */}

        <div className="my-5 h-px bg-white/[0.09]" />

        {/* PRICE AND BOOK BUTTON */}

        <div className="mt-auto flex items-end justify-between gap-3">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Additional KM
            </p>

            <p className="mt-1 text-[16px] font-bold tracking-tight text-[#e3ae70]">
              {price}

              {price !== "On Request" && (
                <span className="ml-1 text-[10px] font-normal text-white/50">
                  / km
                </span>
              )}
            </p>

          </div>

          <a
            href="#booking"
            className="flex h-10 min-w-[76px] shrink-0 items-center justify-center rounded-full bg-[#e3ae70] px-5 text-xs font-semibold text-[#171717] transition-all duration-300 hover:bg-[#c58b48] hover:shadow-[0_4px_15px_rgba(227,174,112,0.2)]"
          >
            Book
          </a>

        </div>

      </div>

    </article>
  );
}