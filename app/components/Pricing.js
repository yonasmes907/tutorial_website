
import React from "react";

const packagePlans = [
  {
    name: "5-Hour Package",
    price: "125 ብር",
    regularPrice: "150 ብር",
    features: [
      "5 hours of tutoring",
      "Flexible scheduling",
      "Personalized study plans",
      "Progress tracking",
    ],
  },
  {
    name: "10-Hour Package",
    price: "240 ብር",
    regularPrice: "300 ብር",
    features: [
      "10 hours of tutoring",
      "Priority scheduling",
      "Access to online resources",
      "Monthly progress reports",
    ],
  },
  {
    name: "20-Hour Package",
    price: "440 ብር",
    regularPrice: "600 ብር",
    features: [
      "20 hours of tutoring",
      "Unlimited support",
      "Customized study materials",
      "Weekly progress tracking",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Package Pricing</h2>
        <p className="text-center text-lg mb-6 text-gray-700">
          Choose a package that fits your needs and enjoy discounts on multiple
          sessions!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packagePlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-4">
                {plan.price}{" "}
                <span className="line-through text-gray-500">
                  {plan.regularPrice}
                </span>
              </p>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Purchase Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
