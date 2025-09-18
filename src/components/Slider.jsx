import React, { forwardRef } from "react";

const Slider = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth
        [scrollbar-width:none]    /* Firefox */
        [-ms-overflow-style:none] /* IE/Edge */
        [&::-webkit-scrollbar]:hidden /* Chrome/Safari */"
    >
      {children}
    </div>
  );
});

export default Slider;
