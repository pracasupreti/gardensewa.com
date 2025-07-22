"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

function Faq() {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arrowIcon = "/image/icons/right-list-arrow.svg";

  return (
    <section className="FAQ bg-[#f5f5f5] pb-20">
      <div className="container mx-auto max-w-[1000px] py-20 px-5 lg:px-0">
        <h1 className="text-center font-bold text-[35px] text-[#008000] pb-20">
          Frequently Asked Questions
        </h1>

        {faqData.map((item) => (
          <Accordion
            key={item.id}
            open={open === item.id}
            animate={{
              mount: { opacity: 1, height: "auto" },
              unmount: { opacity: 0, height: "0px" },
            }}
          >
            <AccordionHeader onClick={() => handleOpen(item.id)}>
              <p className="flex gap-2 items-center text-[15px] font-normal cursor-pointer">
                <Image
                  src={arrowIcon}
                  alt="Arrow Icon"
                  width={10}
                  height={10}
                  className="w-[10px] h-auto"
                />
                {item.question}
              </p>
            </AccordionHeader>
            <AccordionBody>{item.answer}</AccordionBody>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default Faq;

// FAQ data array
const faqData = [
  {
    id: 1,
    question: " What is Gardensewa.com?",
    answer:
      " Gardensewa.com is an online platform dedicated to offering gardening services—from design and planting to maintenance and landscaping—for home gardeners, community projects, and institutions.",
  },
  {
    id: 2,
    question: "Which services does Gardensewa.com offer?",
    answer: (
      <div>
        <p>Gardensewa offers a range of services, including:</p>
        <ul className="list py-1">
          <li className="point ">
            <strong>Garden Planning & Design –</strong> Customized layout and plant selection.
          </li>
          <li className="point">
            <strong>Planting & Transplanting –</strong> Installation of trees, shrubs, flowers, and vegetables.
          </li>
          <li className="point ">
            <strong>Maintenance – </strong> Regular watering, weeding, pruning, mulching.
          </li>
          <li className="point">
            <strong>Seasonal Cleanup –</strong> Spring or fall garden preparation.
          </li>
          <li className="point">
            <strong>Soil Prep & Tiling –</strong> Soil leveling and seedbed preparation.
          </li>
        </ul>
      </div>
    ),
  },
  
  {
    id: 3,
    question: "Who can benefit from using Gardensewa.com?",
    answer: (
      <div>
        Ideal for homeowners, apartment dwellers with balconies, schools, offices, community gardens, health centers—anyone seeking reliable, eco-conscious gardening services.
      </div>
    ),
  },
  {
    id: 4,
    question: "Why choose Gardensewa.com?",
    answer:
      <div>
        <p>Gardensewa offers a range of services, including:</p>
        <ul className="list py-1">
          <li className="point ">
           <strong> Expertise:</strong> Trained horticulturalists with practical know‑how.
          </li>
          <li className="point">
            <strong>Eco-friendly:</strong> Focus on sustainable, organic gardening.
          </li>
          <li className="point ">
            <strong>Convenience:</strong> Online booking, transparent pricing, scheduled reminders.
          </li>
          <li className="point">
            <strong>Customization:</strong> Garden plans tailored to space, preferences, climate.
          </li>
          <li className="point">
            <strong>Soil Prep & Tiling:</strong> Soil leveling and seedbed preparation.
          </li>
        </ul>
      </div >
  },
  {
    id: 5,
    question: "How do I book a service?",
    answer:
      <div>
        Visit the Gardensewa.com homepage.
        <br />
        Choose your service type (e.g., planting, maintenance).

        <ul className="list py-1">
          <li className="point py-1">
            <strong>Fill out the form:</strong> location, garden size, preferred date.
          </li>
          <li className="point py-1">
            Get a free estimate.
          </li>
          <li className="point py-1">
            Confirm the schedule and payment.
          </li>
          <li className="point py-1">
            Enjoy your revamped garden!
          </li>
        </ul>
      </div>,
  },
  {
    id: 6,
    question: "What are the pricing models?",
    answer: (
      <div>
        Kisanpedia conducts workshops and seminars focusing on:
        <ul className="list py-1">
          <li className="point list-disc">
            <strong>One-time jobs (e.g., seasonal planting):</strong> fixed rate based on garden size and complexity.
          </li>
          <li className="point list-disc">
            <strong>Subscription plans (e.g., weekly maintenance):</strong> discounted monthly packages.
          </li>
          <li className="point list-disc">
            <strong>Add-ons (e.g., mulching, fertilizing):</strong> billed separately for flexibility.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    question: "Do I need any gardening knowledge to use the service?",
    answer:
      " No! Gardensewa.com caters to all skill levels. They can guide you from scratch or support your existing gardening efforts with semi- or fully-managed care.",
  },
  {
    id: 8,
    question: " Which areas are served by Gardensewa.com?",
    answer:
      " Gardensewa.com primarily serves [Your Country/Region]. Coverage includes urban and suburban zones—check the zone map on the website or contact support for availability in your area.",
  },
  {
    id: 9,
    question: " Are the plants and materials environmentally safe?",
    answer: 
    "Yes—Gardensewa.com prioritizes organic seeds, native species, eco-friendly pest control, and sustainable mulches, aligning with eco-conscious gardening standards."
  },
  {
    id: 10,
    question:
      " What if I'm unhappy with the service?",
    answer:
      "They offer a satisfaction guarantee: notify them within 48 hours, and they’ll redo the task free of charge or provide a partial refund.",
  },
   {
    id: 11,
    question:
      "Do they offer consultations or garden coaching?",
    answer:
      " Yes! Choose their Garden Coaching service for personalized advice, seasonal planning tips, and step-by-step hobbyist guidance.",
  },

   {
    id: 12,
    question:
      "How can I stay updated on promotions or gardening tips?",
    answer:
      "Subscribe to their weekly newsletter for service offers, tips, plant care guidance, and short how‑to articles—directly from home gardening experts.",
  },
];

import React from 'react'

const page = () => {
  return (
    <>
      faq
    </>
  )
}

export default page
