import React from "react";
import HorizontalDivider from "./Components/HorizontalDivider";
import Logo from "./Components/Logo";
import Testimonials from "./Components/Testimonials";
import Button from "./Components/Button";
import Image from "next/image";
import MissionSection from "./Components/MissionSection";
import Footer from "./Components/Footer";
import OwnedBy from "./Components/OwnedBy";
import MasonryLayout from "./Components/Masonry";

export default function Home() {
  return (
    <main className="min-h-screen h-screen w-full">
      <div className="bg-hero-bg bg-cover bg-center h-screen w-full">
        <Logo />
        <div className="flex justify-center text-[#f5f5f5] items-center h-full flex-col">
          <div className="relative flex justify-center text-[#f5f5f5] items-center">
            <Image
              src={"/hero_frame.svg"}
              alt="hero_bg_frame"
              width={1000}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <p className="text-[28px]">Your Dream Home Awaits</p>
              <p className="text-sm">Cubism Interior Design Studio</p>
              <div
                className={`border-t ${`border-[#F5F5F5]`} my-5 w-[45%]`}
              ></div>
              <p className="text-sm font-medium">
                &quot;Elevate your space with timeless elegance – where artistry
                meets functionality at our interior design studio.&quot;
              </p>
              <p className="text-sm mt-3">Explore to Refine your Interiors</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Button btnTxt="Gallery" />
                <Button
                  btnTxt="Get Brochure"
                  showEndIc={true}
                  endIcConfig={{
                    icSrc: "/arrow.svg",
                    altText: "down arrow icon",
                    width: 10,
                    height: 10,
                  }}
                />
              </div>
            </div>
          </div>
          <Testimonials />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 mx-24">
        <MissionSection />
        <OwnedBy />
        <MasonryLayout />
      </div>
      <Footer />
    </main>
  );
}
