import React from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="w-full h-19 flex justify-center items-center bg-[#F9F9F9]">
      <img src={Logo} alt="companyLogo" />
    </div>
  );
};

export default Header;
