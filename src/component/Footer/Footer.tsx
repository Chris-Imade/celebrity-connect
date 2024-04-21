import React from "react";
import Logo from "../../assets/logo.png";
import globalStyles from "../../App.module.css";

const Footer = () => {
  return (
    <div
      className={`h-[336px] bg-[#19191B] flex items-center lg:items-start flex-col lg:flex-row justify-between py-[76px] lg:px-[123px] px-[20px]`}
    >
      <div>
        <img
          src={Logo}
          alt="CleverCode-Technologies logo"
          width={157.84}
          height={46.04}
        />
      </div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-row justify-around w-[70%]">
        <ul>
          <li>
            <a
              href="#"
              className={`${globalStyles.boldNunito} text-white opacity-70 text-[18px]`}
            >
              Support
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${globalStyles.boldNunito} text-white opacity-70 text-[18px]`}
            >
              Join Us
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              className={`${globalStyles.boldNunito} text-white opacity-70 text-[18px]`}
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${globalStyles.boldNunito} text-white opacity-70 text-[18px]`}
            >
              Learn
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              className={`${globalStyles.boldNunito} text-white opacity-70 text-[18px]`}
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${globalStyles.boldNunito} text-white opacity-70 text-[18px]`}
            >
              Contact Us
            </a>
          </li>
        </ul>
        <ul>
          <li
            className={`${globalStyles.boldNunito} text-white opacity-70 text-[18px]`}
          >
            &copy;2024 CleverCode, All Rights Reserved
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
