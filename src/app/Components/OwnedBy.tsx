import Image from "next/image";
import React from "react";

const profileSpecs = [
  {
    ic: "/client_satisfaction.svg",
    heading: "Client Satisfaction",
    description: "Over 100% of my clients have rated my services with 5.",
  },
  {
    ic: "/areas.svg",
    heading: "Specialized areas:",
    description:
      "I specialize in modern design, minimalist aesthetics, or sustainable living.",
  },
  {
    ic: "/awards.svg",
    heading: "Awards or certifications:",
    description:
      "I am a certified [certification name] and have been recognized with [award name] for my contributions to the field of interior design.",
  },
];

const OwnedBy = () => {
  return (
    <>
      <div className="my-10 flex justify-between items-stretch gap-16">
        <div className="relative overflow-hidden h-full">
          <Image
            src={"/profile.svg"}
            width={400}
            height={600}
            alt={"profile_photo"}
            objectFit="cover"
          />
          <div
            className={
              "absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-start items-end pb-5 ps-5 text-[#F5F5F5] text-sm"
            }
          >
            <span className="flex flex-col">
              <p className="text-[11px]">Principal Designer</p>
              <div className="border-t-[1.2px] w-[50%] border-[#F5F5F5] my-1"></div>
              <p className="text-sm font-medium">Sayyami Shah</p>
              <p className="text-[11px] mt-1">B.Des in Interior Design</p>
            </span>
          </div>
        </div>

        <div>
          {/* <p className="text-sm font-bold">{`I'm Sayyami Shah`}</p> */}
          <p className="text-sm">
            {`I'm a dedicated interior designer with 4 years of experience
            transforming spaces into personalized havens. Passionate about
            creating functional and aesthetically pleasing environments, I
            collaborate closely with clients to understand their unique vision
            and bring it to life.`}
          </p>
          <span className="flex gap-2 items-stretch my-5">
            {profileSpecs.map((item, idx) => {
              return (
                <div key={idx + 1}>
                  <span className="flex gap-1 items-center">
                    <Image
                      src={item.ic}
                      width={18}
                      height={18}
                      alt={`${item.ic}_icon`}
                    />
                    <p className="font-bold text-sm">{item.heading}</p>
                  </span>
                  <p className="text-sm pl-5">{item.description}</p>
                </div>
              );
            })}
          </span>
          <div className="border-t-[1.2px] border-[#262626] mt-10 mb-5"></div>
          <div className="flex gap-3">
            <div className="border-l-2 border-[#262626]"></div>
            <div className="italic">
              <p className="text-sm font-bold">Design Your Dream Home</p>
              <p className="text-sm">
                We work with homeowners or partner with architects, custom home
                builders, and artisans to explore and discover meaningful
                solutions. Ultimately, our goal is to exceed our clients ’
                expectations by providing environments that reflect their values
                and meet their needs well into the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnedBy;
