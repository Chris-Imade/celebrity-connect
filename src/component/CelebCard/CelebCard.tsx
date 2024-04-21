import React, { useEffect, useState } from "react";
import styles from "../../App.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { urlFor } from "../../client";

interface CelebList {
  celeb: {
    id: number;
    name: string;
    image: {
      _type: "image";
      asset: {
        _ref: string;
        _type: string;
      };
    };
    date: string;
    time: string;
    address: string;
    id_number: string;
    slug: { _type: "slug"; current: string };
    excerpt: string;
  };
  index: number;
}

const CelebCard: React.FC<CelebList> = ({ celeb }) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMaxHeight(Math.floor(Math.random() * 45));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-[calc(25vw - 10rem)] overflow-hidden shadow-lg bg-image border-solid border-4 border-white relative group transition-all duration-500 ease-in-out`}
      style={{
        height: `${maxHeight + "rem"}`,
        minHeight: `${30}rem`,
      }}
    >
      <motion.div
        className="overflow-hidden h-full w-full bg-[rgba(0,0,0,0.6)] absolute hidden group-hover:cursor-pointer transition-all duration-500 ease-in-out group-hover:flex items-end"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <div className="px-6 py-4 w-full">
          <div
            className="font-bold text-xl mb-2 text-white"
            style={{ fontFamily: styles.boldNunito }}
          >
            {celeb.name}
          </div>
          <p
            className="text-white text-base"
            style={{ fontFamily: styles.poppinsRegular }}
          >
            Date: {celeb.date}
            <br />
            Time: {celeb.time}
            <br />
            Address: {celeb.address}
            <br />
            ID Number: {celeb.id_number}
          </p>
          <Link to={`/details/${celeb.slug.current}`}>
            <button
              style={{ fontFamily: styles.poppinsBold }}
              className="bg-[#F28D31] w-full text-xl font-semibold text-white mt-5 rounded-md hover:text-[#F28D31] hover:bg-white transition-all duration-500 ease-out py-4"
            >
              Book Now
            </button>
          </Link>
        </div>
      </motion.div>
      <img
        className="w-full h-full object-cover"
        src={urlFor(celeb.image).url()}
        alt={celeb.name}
      />
    </div>
  );
};

export default CelebCard;
