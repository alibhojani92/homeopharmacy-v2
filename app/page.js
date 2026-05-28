"use client";

import { useState } from "react";

async function placeOrder(orderData) {
  try {
    const response = await fetch("/api/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Order Placed Successfully!");
    } else {
      alert("Failed to place order");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
}

export default function Home() {
  const medicines = [
    {
      id: 1,
      name: "Belladonna 30",
      brand: "SBL",
      price: 120,
      image: "/images/belladonna.webp",
    },
    {
      id: 2,
      name: "Arnica Montana 30",
      brand: "SBL",
      price: 110,
      image: "/images/arnica.webp",
    },
    {
      id: 3,
      name: "Rhus Tox 30",
      brand: "SBL",
      price: 95,
      image: "/images/rhus.webp",
    },
    {
      id: 4,
      name: "Nux Vomica 30",
      brand: "SBL",
      price: 140,
      image: "/images/nux.webp",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    const existing = cart.find((item) => item.id === medicine.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === medicine.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...medicine, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main className="min-h-screen bg-[#c4dfdc]">
      {/* Header */}
      <div className="bg-teal-800 text-white p-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            SHRI SAINATH
          </h1>
          <p className="text-lg">
            Homoeopathic Pharmacy
          </p>
        </div>

        <div className="bg-white text-teal-800 px-5 py-3 rounded-2xl text-xl font-semibold shadow">
          Cart ({cart.length})
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search medicine..."
          className="w-full p-4 rounded-2xl text-lg shadow outline-none"
        />
      </div>

      {/* Brands */}
      <div className="px-4">
        <h2 className="text-4xl font-bold text-teal-900 mb-5">
          Brands
        </h2>

        <div className="flex gap-4 overflow-auto pb-3">
          {[
            "SBL",
            "Wheezal",
            "Reckeweg",
            "Bakson",
            "Dr Reckeweg",
          ].map((brand) => (
            <div
              key={brand}
              className="bg-white px-8 py-5 rounded-3xl shadow text-2xl whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* Medicines */}
      <div className="p-4">
        <h2 className="text-4xl font-bold text-teal-900 mb-5">
          Popular Medicines
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {medicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <span className="bg-teal-100 px-3 py-1 rounded-full text-sm">
                  {medicine.brand}
                </span>

                <h3 className="font-bold text-lg mt-3">
                  {medicine.name}
                </h3>

                <p className="text-2xl font-bold text-teal-800 mt-2">
                  ₹{medicine.price}
                </p>

                <button
                  onClick={() => addToCart(medicine)}
                  className="w-full mt-4 bg-teal-700 text-white py-3 rounded-2xl text-lg font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-3xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Cart Items
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <div>
                <h3 className="font-semibold">
                  {item.name}
                </h3>
                <p>₹{item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded-full"
                >
                  -
                </button>

                <span className="font-bold">
                  {item.qty}
                </span>

                <button
                  onClick={() =>
                    increaseQty(item.id)
                  }
                  className="bg-green-600 text-white px-3 py-1 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-2xl font-bold">
              Total: ₹{total}
            </h2>

            <button className="bg-green-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold">
              Order on WhatsApp
            </button>
          </div>
        </div>
)}
{/* Place Order Section */}
<button
  onClick={() =>
    placeOrder({
      customer_name: name,
      mobile,
      address,
      medicines: cart,
      total,
      payment_method: paymentMethod,
      coupon_code: coupon,
    })
  }
  className="bg-green-500 text-white w-full py-4 rounded-2xl text-2xl font-bold"
>
  Place Order
</button>
  <input
    type="text"
    placeholder="Full Name"
    className="w-full p-3 rounded-xl border mb-3 outline-none"
  />

  <input
    type="tel"
    placeholder="Mobile Number"
    className="w-full p-3 rounded-xl border mb-3 outline-none"
  />

  <textarea
    placeholder="Full Address"
    className="w-full p-3 rounded-xl border mb-3 outline-none h-24"
  />

  <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Coupon Code"
      className="flex-1 p-3 rounded-xl border outline-none"
    />
    <button className="bg-teal-700 text-white px-4 rounded-xl">
      Apply
    </button>
  </div>

  <div className="mb-4">
    <p className="font-semibold text-lg mb-2">
      Payment Method
    </p>

    <div className="flex gap-3">
      <button className="bg-green-100 px-4 py-2 rounded-xl border">
        COD
      </button>

      <button className="bg-blue-100 px-4 py-2 rounded-xl border">
        Online Payment
      </button>
    </div>
  </div>

  <button className="w-full bg-green-500 text-white py-4 rounded-2xl text-xl font-semibold">
    Order on WhatsApp
  </button>
</div>

      
    </main>
}
