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
              unmount: { opacity: 0, height: 0 },
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
    question: "What is Kisanpedia",
    answer:
      "Kisanpedia is an agri-based startup providing a 'one-stop' agriculture solution to farmers. They work directly with farmers and commercial farms to enhance crop yield, reduce production costs, and improve crop quality for better pricing.",
  },
  {
    id: 2,
    question: "What services does Kisanpedia offer?",
    answer: (
      <div>
        <p>Kisanpedia offers a range of services, including:</p>
        <ul className="list py-1 list-disc pl-4">
          <li>
            <strong>Training and Capacity Building:</strong> Workshops and
            seminars on crop management, pest control, and soil health.
          </li>
          <li>
            <strong>Research and Development:</strong> Development of new crop
            protection agents and seed varieties.
          </li>
          <li>
            <strong>Technology and Digital Services:</strong> Precision
            agriculture using GPS-guided tools and remote sensing.
          </li>
          <li>
            <strong>Post-Harvest and Value-Added Services:</strong> On-farm
            processing equipment and advanced packaging solutions.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    question: "How can I contact Kisanpedia?",
    answer: (
      <>
        You can reach Kisanpedia via email at{" "}
        <a href="mailto:[email protected]" className="underline text-blue-500">
          [email protected]
        </a>{" "}
        or by phone at +977-9746608593. Their office is located at Puspalal
        Chowk, Budhiganga -1, Morang.
      </>
    ),
  },
  {
    id: 4,
    question: "Who are the key personnel at Kisanpedia?",
    answer:
      "Rajesh Mehta serves as the CEO, and Babita Singh is the Founder of Kisanpedia Service Pvt. Ltd.",
  },
  {
    id: 5,
    question: "Does Kisanpedia offer products for sale?",
    answer:
      "Yes, Kisanpedia provides a variety of agricultural products, including bio-fertilizers, pruning tools, insecticides, seeds, and plant boosters.",
  },
  {
    id: 6,
    question: "What training programs does Kisanpedia provide?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>Crop Management:</strong> Best practices for growing and
          harvesting crops.
        </li>
        <li>
          <strong>Pest Control:</strong> Identifying and implementing effective
          control methods.
        </li>
        <li>
          <strong>Soil Health:</strong> Maintaining healthy soil for sustainable
          agriculture.
        </li>
      </ul>
    ),
  },
  {
    id: 7,
    question: "How does Kisanpedia support sustainable agriculture?",
    answer:
      "Kisanpedia emphasizes conservation and sustainability strategies, educating farmers on preserving the environment without compromising productivity. They invest in research and development, prioritize education and training, and foster partnerships to drive positive change.",
  },
  {
    id: 8,
    question: "Does Kisanpedia assist with market access for farmers?",
    answer:
      "Yes, Kisanpedia works to create linkages between farmers and wholesalers, enabling farmers to sell their produce directly to buyers.",
  },
  {
    id: 9,
    question: "What is Kisanpedia's mission and vision?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>Mission:</strong> Empower farmers to take bumper production by
          providing the best crop intelligence, quality products, and efficient
          services.
        </li>
        <li>
          <strong>Vision:</strong> Our vision is to make the best farming for a
          better farmer's life.
        </li>
      </ul>
    ),
  },
  {
    id: 10,
    question:
      "How can I stay updated with Kisanpedia's latest news and updates?",
    answer:
      "You can subscribe to their newsletter through their website to receive the latest updates and information.",
  },
];
