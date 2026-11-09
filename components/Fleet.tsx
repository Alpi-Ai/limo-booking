import VehicleCard from "@/components/VehicleCard";

const vehicles = [
  {
    id: 1,
    name: "Cadillac Escalade",
    category: "Premium SUV",
    passengers: 6,
    luggage: 4,
    price: "CAD 4.00",
    image: "/images/cadillacescalade.jpg",
  },
  {
    id: 2,
    name: "Lincoln Navigator",
    category: "Luxury SUV",
    passengers: 6,
    luggage: 4,
    price: "CAD 3.50",
    image: "/images/lincolnnavigator.jpg",
  },
  {
    id: 3,
    name: "Chevrolet Suburban",
    category: "Full-Size SUV",
    passengers: 6,
    luggage: 5,
    price: "CAD 3.00",
    image: "/images/ChevroletSuburban.jpg",
  },
  {
    id: 4,
    name: "GMC Yukon",
    category: "Premium SUV",
    passengers: 6,
    luggage: 5,
    price: "CAD 2.80",
    image: "/images/gmcyukon.jpg",
  },
  {
    id: 5,
    name: "Mercedes-Benz E-Class",
    category: "Executive Sedan",
    passengers: 3,
    luggage: 3,
    price: "CAD 4.50",
    image: "/images/Mercedes-Benz E-Class.jpg",
  },
  {
    id: 6,
    name: "Mercedes-Benz Sprinter",
    category: "Executive Van",
    passengers: 12,
    luggage: 10,
    price: "CAD 8.00",
    image: "/images/Mercedes-Benz Sprinter.jpg",
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="bg-[#f7f2ed] px-5 py-20 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 max-w-3xl">

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c59655]">
            Our Fleet
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171717] sm:text-[34px]">
            Choose the Right Vehicle for Your Journey
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#77716b]">
            From executive sedans to spacious luxury SUVs and vans, choose
            the vehicle that best fits your passengers, luggage and travel plans.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {vehicles.map((vehicle) => (

            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              category={vehicle.category}
              passengers={vehicle.passengers}
              luggage={vehicle.luggage}
              price={vehicle.price}
              image={vehicle.image}
            />

          ))}

        </div>

      </div>
    </section>
  );
}