import React from "react";

interface SectionHeaderProps {
  headerText: string;
  linOnTop?: boolean;
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { headerText, linOnTop = false } = props;
  return (
    <>
      {!linOnTop ? (
        <div className="flex items-center gap-3">
          <p className="font-extrabold text-2xl text-[#262626]">
            {" "}
            {headerText}
          </p>
          <div className="border-t border-[#262626] w-[30%]"></div>
        </div>
      ) : (
        <div>
          <div className="border-t-[3px] border-[#262626] w-[20%] mb-1"></div>
          <p className="font-[900] text-2xl text-[#262626]">{headerText}</p>
        </div>
      )}
    </>
  );
};

export default SectionHeader;
