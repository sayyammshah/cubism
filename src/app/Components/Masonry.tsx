import Image from "next/image";
import React from "react";

interface MasonryItemProps {
  image: string;
  title: string;
}

const MasonryItem: React.FC<MasonryItemProps> = ({ image, title }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        layout="fill"
        alt={title}
        objectFit="cover"
        // className="object-cover h-full w-full"
      />
      {/* <div className="absolute bottom-0 left-0 p-4 bg-gray-800 opacity-75">
        <p className="text-white text-sm">{title}</p>
      </div> */}
    </div>
  );
};

const MasonryLayout: React.FC = () => {
  const items: MasonryItemProps[] = [
    {
      image: "/image_1.svg",
      title: "projectImg",
    },
    {
      image: "/image_2.svg",
      title: "projectImg",
    },
    {
      image: "/image_3.svg",
      title: "projectImg",
    },
    {
      image: "/image_4.svg",
      title: "projectImg",
    },
    {
      image: "/image_5.svg",
      title: "projectImg",
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
      {items.map((item, idx) => (
        <MasonryItem
          key={`${item.title}_${idx}`}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default MasonryLayout;
