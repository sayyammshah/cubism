import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";

const ourMissionPoints = [
  "Your interior spaces should be a reflection of you and your lifestyle.",
  "We respect your budget and customize solutions that work within it.",
  "Our personal involvement will be thorough, providing you with an indepth understanding of our process and design work.",
  "We believe that constant attention to detail from our first conceptual effort to the final installation of furniture is essential to ensuring your satisfaction.",
];

const MissionSection = () => {
  return (
    <>
      <div className="md:flex items-start gap-20">
        <div className="flex gap-2 items-start flex-shrink-0">
          <Image
            src={"/mission_sec_1.svg"}
            width={300}
            height={450}
            alt={"kitchen_ma"}
          />
          <div>
            <Image
              src={"/mission_sec_2.svg"}
              width={300}
              height={200}
              alt={"kitchen_ma"}
            />
            <div className="shadow-xl rounded-2xl p-5 mt-2 w-[450px] flex gap-2">
              <SectionHeader headerText="Who are we?" linOnTop={true} />
              <p className="text-sm">
                The interior design studio has been creating refined, meaningful
                interior design for our discerning clientele for nearly 3 years.
                As a premier Seattle interior design firm, we embrace a process
                that incorporates multitude of elements essential to
                experiencing a building or space as a complete environment.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader headerText="Our Mission" />
          <ul className="list-disc text-sm mt-5">
            {ourMissionPoints.map((pts, idx) => {
              return (
                <li key={idx + 1} className="my-3">
                  <p>{pts}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MissionSection;
