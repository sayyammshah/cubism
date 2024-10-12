import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import HorizontalDivider from "./HorizontalDivider";

const Footer = () => {
  return (
    <>
      <div className="bg-[#E8E3DF] py-9 px-24">
        <Logo showWithTagLine={true} />
        <Link href={"www.google.com"} className="text-sm underline ml-10 mt-10">
          Get Brochure
        </Link>
        <div className="flex items-center gap-5 ml-10 mt-5">
          {/* <span className="w-[55%]">
            <p className="font-extrabold text-sm">Address</p>
            <p className="text-sm">
              Pinnacle Business Park, 3rd Floor, Office No. 305,12th Cross,
              Residency Road, Bangalore, Karnataka 560001
            </p>
          </span> */}
          <span>
            <p className="font-extrabold text-sm">Connect on Whatsapp</p>
            <p className="text-sm">
              Sayyami Shah <br /> +91 9876543210
            </p>
          </span>
        </div>

        <HorizontalDivider isLight={false} />

        <p className="text-[12px]">{`© ${new Date().getFullYear()} cubism. All Rights Reserved.`}</p>
      </div>
    </>
  );
};

export default Footer;
