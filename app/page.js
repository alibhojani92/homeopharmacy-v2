import medicines from "../data/medicines";

export default function Home() {
  const popularMedicines = medicines.filter(
    (medicine) => medicine.popular
  );

  return (
    <main className="min-h-screen bg-[#b7d9d4]">

      {/* Header */}
      <header className="bg-teal-800 text-white px-5 py-4 shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">
              SHRI SAINATH
            </h1>
            <p className="text-sm text-teal-100">
              Homoeopathic Pharmacy
            </p>
          </div>

          <button className="bg-white text-teal-800 px-4 py-2 rounded-xl font-medium shadow">
            Cart (0)
          </button>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Search medicine..."
            className="w-full p-3 rounded-xl text-black outline-none"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-5">
        <h2 className="text-5xl font-bold text-teal-800">
          SHRI SAINATH
        </h2>

        <h3 className="text-2xl text-teal-700 mt-2">
          HOMOEOPATHIC PHARMACY
        </h3>

        <p className="mt-6 text-gray-700 text-lg">
          Trusted Homoeopathic Medicines
        </p>

        <button className="mt-8 bg-teal-700 text-white px-6 py-3 rounded-xl shadow-lg">
          WhatsApp Order
        </button>
      </section>

      {/* Brands */}
      <section className="px-5 mb-10">
        <h2 className="text-2xl font-bold text-teal-900 mb-4">
          Brands
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {["SBL", "Wheezal", "Reckeweg", "Bakson"].map((brand) => (
            <div
              key={brand}
              className="bg-white px-5 py-3 rounded-xl shadow whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Popular Medicines */}
      <section className="px-5 pb-24">
        <h2 className="text-2xl font-bold text-teal-900 mb-5">
          Popular Medicines
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {popularMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-40 object-contain bg-gray-100"
              />

              <div className="p-3">
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-lg">
                  {medicine.brand}
                </span>

                <h3 className="font-semibold mt-2 text-gray-800">
                  {medicine.name}
                </h3>

                <p className="text-lg font-bold text-teal-800 mt-2">
                  ₹{medicine.price}
                </p>

                <button className="w-full mt-3 bg-teal-700 text-white py-2 rounded-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl"
      >
        WhatsApp
      </a>

    </main>
  );
}
