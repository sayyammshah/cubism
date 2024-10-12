import React from "react";

const HorizontalDivider = (props: { isLight: boolean }) => {
  return (
    <div
      className={`border-t ${
        props.isLight ? `border-[#F5F5F5]` : `border-[#262626]`
      } my-5`}
    ></div>
  );
};

export default HorizontalDivider;
