"use client";

import "swiper/css";
import "swiper/css/pagination";
import HomeHero from "./sections/HomeHero";
import ChooseUs from "./sections/ChooseUsAndClients";
import ServicesAndPlants from "./sections/ServicesAndPlants";
import { OurPartners } from "./sections/OurParteners";
import LatestUpdates from "./LatestUpdates";
import Testimonial from "./sections/Testimonial";


export default function HeroSlider() {
  return (
    <>
    <HomeHero />
    <ChooseUs />
    <ServicesAndPlants />
    <OurPartners />
    <LatestUpdates />
    <Testimonial />
    </>
  );
}
