import React from "react";
import HeaderSection from "../header/HeaderSection";
import FooterSection4 from "../footer/FooterSection4";
type Props = {
  children: React.ReactNode;
};
const InnerLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderSection innerHeader />
      {children}
      <FooterSection4 />
    </>
  );
};

export default InnerLayout;
