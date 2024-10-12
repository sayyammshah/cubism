import React from "react";

const testimonialsData = [
  {
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet",
  },
  {
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet",
  },
  {
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        {testimonialsData.map(({ name, comment }, index) => {
          return (
            <div
              className="max-w-[300px] rounded-xl text-[#262626] p-5 bg-[#F5F5F5]/[45%]"
              key={index + 1}
            >
              <p className="text-sm font-extrabold">{name}</p>
              <p className="text-sm font-medium">{comment}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Testimonials;
