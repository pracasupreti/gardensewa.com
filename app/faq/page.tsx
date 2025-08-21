"use client";

import { useState } from "react";
import Head from "next/head";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Wrench,
  Sprout,
  Package,
  PhoneIncoming,
} from "lucide-react";

// FAQ Data
const faqData = [
  {
    id: "faq-1",
    question: "What kind of services do you provide ?",
    answer:
      "We provide a comprehensive range of gardening and landscaping services, including lawn care, plant maintenance, garden design, and pest control. Our specialists are trained to handle a variety of needs to keep your garden looking its best.",
  },
  {
    id: "faq-2",
    question: "How can I book a Garden Service ?",
    answer:
      'Booking a service is easy! You can either use our online booking form on the "Contact Us" page, or you can call our support team directly. We will schedule a specialist to visit your location at your convenience.',
  },
  {
    id: "faq-3",
    question: "Do I need to prepare anything before the gardener arrives ?",
    answer:
      "We recommend clearing any personal items or obstacles from the garden area to allow our specialists easy access. If you have any specific instructions or concerns, please let us know during the booking process.",
  },
  {
    id: "faq-4",
    question: "Can I cancel or reschedule a booking ?",
    answer:
      "Yes, you can. We understand that plans can change. You can cancel or reschedule your booking by contacting our customer support team at least 24 hours in advance without any cancellation fees.",
  },
  {
    id: "faq-5",
    question: "Are your gardeners trained and verified ?",
    answer:
      "Absolutely. All our gardeners are highly trained, experienced professionals. They undergo a thorough background check and are fully verified to ensure the safety and quality of our services.",
  },
];

// Navigation Items (unique IDs)
const navigationItems = [
  {
    id: 1,
    label: "Services",
    icon: Wrench,
    color: "bg-primary hover:bg-secondary",
  },
  {
    id: 2,
    label: "Plants",
    icon: Sprout,
    color: "bg-primary hover:bg-secondary",
  },
  {
    id: 3,
    label: "Delivery",
    icon: Package,
    color: "bg-primary hover:bg-secondary",
  },
  {
    id: 4,
    label: "Support",
    icon: PhoneIncoming,
    color: "bg-primary hover:bg-secondary",
  },
];

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      {" "}
      {/* Header Section */}
      <div className="text-center mb-12 bg-card-stroke-light p-12">
        <p className="text-sm text-gray-500 mb-2">
          Home &gt; <span className="ml-2 text-primary"> FAQ's</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Frequently Asked Questions (FAQ's)
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Answers to your most common questions - all in one place. Need more
          help? Contact us anytime or chat with a specialist below.
        </p>
        <button className="buttonColorFill mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-lg transition-colors duration-300">
          Contact Us
        </button>
      </div>
      <div className="min-h-screen font-sans text-gray-800">
        <Head>
          <title>FAQ's</title>
          <meta name="description" content="Frequently Asked Questions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-12">
          {/* Navigation Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-12">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col px-16 py-8 items-center justify-center space-x-2 p-4 w-full md:w-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${item.color} text-white`}
                >
                  <Icon size={28} />
                  <span className="text-lg font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* FAQ List Section */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div
                  className="flex items-center justify-between p-5 cursor-pointer bg-card hover:bg-green-100 transition-colors duration-300"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span className="font-semibold text-lg text-primary">
                    {item.question}
                  </span>
                  <span className="text-primary">
                    {openFAQ === item.id ? (
                      <ChevronUpIcon className="h-6 w-6 transition-transform transform" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6 transition-transform transform" />
                    )}
                  </span>
                </div>
                {openFAQ === item.id && (
                  <div className="p-5 bg-white border-t border-green-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;
