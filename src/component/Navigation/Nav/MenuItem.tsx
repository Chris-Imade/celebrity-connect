import * as React from "react";
import { motion } from "framer-motion";
import styles from "../../../App.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


interface MenuItemProps {
  i: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-center py-6"
    >
      <a
        className={`${
          i !== "auth"
            ? `text-[#211F2D] hover:text-[#5ACBC9] ${styles.boldNunito}`
            : `bg-[#211F2D] px-12 py-2 rounded-[5px] text-white font-semibold ${styles.boldNunito}`
        } text-[24px]`}
        href={`${i === "auth" ? "#contact" : "#" + i}`}
      >
        {i === "auth" ? "Contact Us" : i}
      </a>
    </motion.li>
  );
};
