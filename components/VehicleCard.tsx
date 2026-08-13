import Image from "next/image";

type VehicleCardProps = {
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  image: string;
  imagePosition?: string;
};

export default function VehicleCard({
  name,
  category,
  passengers,
  luggage,
  image,
  imagePosition = "center",
}: VehicleCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#E6E2DA] bg-white">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1EFEA]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
          style={{
            objectPosition: imagePosition,
          }}
        />
      </div>

      <div className="p-5 sm:p-6 lg:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#A97845] sm:text-sm">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-[#172033] sm:text-2xl">
          {name}
        </h3>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#667085]">
          <span>{passengers} passengers</span>
          <span>{luggage} bags</span>
        </div>

        <button className="mt-6 rounded-full border border-[#D7D1C7] px-5 py-2.5 text-sm font-semibold text-[#172033] transition hover:border-[#A97845] hover:text-[#A97845]">
          View Vehicle
        </button>
      </div>
    </article>
  );
}