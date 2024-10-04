"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What is Tutorial Agency?",
    answer:
      "Tutorial Agency is a platform that connects students with expert tutors in various subjects to facilitate personalized learning experiences.",
  },
  {
    question: "How do I sign up?",
    answer:
      "You can sign up by clicking the 'Sign Up' button on the homepage and filling out the registration form.",
  },
  {
    question: "What subjects do you offer?",
    answer:
      "We offer a wide range of subjects including Maths, Biology, Physics, Chemistry, Amharic, and Civics. You can check our Tutorials section for more details.",
  },
  {
    question: "How can I book a tutor?",
    answer:
      "After signing up, you can browse our list of tutors by subject and select one to book a session. The booking process is straightforward and user-friendly.",
  },
  {
    question: "Can I change my tutor?",
    answer:
      "Yes, you can change your tutor at any time. We encourage you to find a tutor that best suits your learning style and needs.",
  },
  {
    question: "What if I have more questions?",
    answer:
      "If you have further questions, feel free to contact us through our contact page, and we will be happy to assist you.",
  },
  {
    question: "Do you offer group tutoring sessions?",
    answer:
      "Yes, we offer both individual and group tutoring sessions. You can choose the format that works best for you.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "You can cancel or reschedule a session up to 24 hours in advance without any penalty. Please refer to our terms for more details.",
  },
  {
    question: "Are the tutors qualified?",
    answer:
      "All our tutors are thoroughly vetted and must meet our qualification standards, ensuring they have the necessary expertise in their subjects.",
  },
  {
    question: "How can I pay for the tutoring sessions?",
    answer:
      "Payments can be made through our secure payment portal using credit/debit cards or other available payment options listed on our website.",
  },
  {
    question: "Can I get a refund for a session?",
    answer:
      "Refunds are available under certain conditions. Please check our refund policy on the website for more details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto pt-24 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="bg-gray-100 rounded-lg shadow-lg p-4">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`faq-question flex justify-between items-center w-full text-left py-3 px-5 rounded-md border transition duration-300 ease-in-out ${
                openIndex === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`ml-2 transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer p-4 border rounded-md bg-blue-50 mt-2 flex items-center">
                <span className="text-blue-600 text-2xl mr-2">⭐</span>{" "}
                <span>{faq.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
