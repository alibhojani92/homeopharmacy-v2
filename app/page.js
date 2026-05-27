import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b7d9d4] flex flex-col items-center justify-center px-6 text-center">
      
      <div className="mb-8">
        <Image
          src="/logo.webp"
          alt="Shri Sainath Homoeopathic Pharmacy"
          width={260}
          height={260}
          className="mx-auto rounded-xl"
          priority
        />
      </div>

      <h1 className="text-5xl font-bold text-teal-800">
        SHRI SAINATH
      </h1>

      <h2 className="text-2xl md:text-3xl text-teal-700 mt-2">
        HOMOEOPATHIC PHARMACY
      </h2>

      <p className="mt-8 text-gray-700 text-xl">
        Trusted Homoeopathic Medicines
      </p>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <button className="bg-teal-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg">
          Shop Medicines
        </button>

        <button className="bg-white text-teal-800 px-6 py-3 rounded-xl text-lg shadow-lg border">
          WhatsApp Order
        </button>
      </div>
    </main>
  );
}
