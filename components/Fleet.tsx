import VehicleCard from "@/components/VehicleCard";

const vehicles = [
  {
    id: 1,
    name: "Cadillac Escalade",
    category: "Luxury SUV",
    passengers: 6,
    luggage: 4,
    image: "/images/cadillac-escalade.jpg",
    imagePosition: "center 55%",
  },
  {
    id: 2,
    name: "Mercedes E-Class",
    category: "Executive Sedan",
    passengers: 3,
    luggage: 3,
    image: "/images/mercedes-e-class.jpg",
    imagePosition: "center 58%",
  },
  {
    id: 3,
    name: "GMC Yukon",
    category: "Premium SUV",
    passengers: 6,
    luggage: 5,
    image: "/images/gmc-yukon.jpg",
    imagePosition: "center 52%",
  },
  {
    id: 4,
    name: "Mercedes Sprinter",
    category: "Executive Van",
    passengers: 12,
    luggage: 10,
    image: "/images/mercedes-sprinter.jpg",
    imagePosition: "center 55%",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A97845]">
            Our Fleet
          </p>

          <h2 className="mt-2 max-w-4xl text-3xl font-bold tracking-[-0.03em] text-[#172033] sm:text-4xl">
            Choose the Right Vehicle for Your Journey
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            From executive sedans to spacious luxury SUVs and vans, choose the
            vehicle that best fits your passengers, luggage and travel plans.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2 lg:gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              category={vehicle.category}
              passengers={vehicle.passengers}
              luggage={vehicle.luggage}
              image={vehicle.image}
              imagePosition={vehicle.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}