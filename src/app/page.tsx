"use client";
import Navbar from "../components/Navbar";
import Overview from "../components/Home/Overview";
import Features from "../components/Home/Features";
import Footer from "../components/Footer";
import { HeroSlider } from "@/components/hero-slider";

export default function Home() {
  const heroSlides = [
    {
      type: "image" as const,
      src: "./Gemini_Generated_Image_bp4dkkbp4dkkbp4d.png",
      alt: "Night city view",
      tagline: "4k+ drivers working 24/7",
      heading: "Where Do You Want To Go?",
      subheading:
        "Wherever you are, we've got your back with unbeatable pricing, lightning-fast responses, and top-notch customer service available 24/7! Ready for your next ride? Download our app and hop on board today!",
    },
    {
      type: "video" as const,
      src: "/offline-vide.mp4",
      tagline: "Premium ride experience",
      heading: "Navigate the City with Ease",
      subheading:
        "Quick pickups, reliable service, and competitive rates across the city. Our professional drivers ensure you arrive safely and on time, every time.",
    },
    {
      type: "image" as const,
      src: "./Gemini_Generated_Image_r3tndur3tndur3tn.jpg",
      alt: "Group of friends using ride service",
      tagline: "Perfect for any occasion",
      heading: "Travel Together, Save Together",
      subheading:
        "Spacious vehicles and special packages for group travel and special occasions. Split the fare with friends and enjoy the journey together.",
    },
  ];

  return (
    <>
      <Navbar isLanding />
      <div>
        <HeroSlider slides={heroSlides} />
      </div>
      <Overview />
      <Features />
      <Footer />
    </>
  );
}
