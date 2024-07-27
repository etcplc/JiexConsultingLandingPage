import React from "react";
type Props = {
  openSidebar: () => void;
};
const ResponsiveMenuBtn = ({ openSidebar }: Props) => {
  return (
    <button className="rv-2-menu-btn d-block d-xl-none" onClick={openSidebar}>
      <i className="fa-regular fa-bars"></i>
    </button>
  );
};

export default ResponsiveMenuBtn;
