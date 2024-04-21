import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import LeftArr from "../../assets/left-arr.png";
import RightArr from "../../assets/right-arr.png";
import styles from "../../App.module.css";

import "./styles.css";

import { IMAGES } from "./Images";

interface Image {
  id: number;
  imageSrc: string;
  stage_name: string;
  excerpt: string;
}

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const Carousel: React.FC = () => {
  const [[imageCount, direction], setImageCount] = useState<[number, number]>([
    0, 0,
  ]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance: number = dragInfo.offset.x;
    const swipeThreshold: number = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number) => {
    let changeDirection: number | undefined;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    if (changeDirection !== undefined) {
      setImageCount([imageId, changeDirection]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (activeImageIndex + 1) % IMAGES.length;
      skipToImage(nextImageIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeImageIndex]);

  return (
    <main>
      <div className="slider-container relative">
        <div className="slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image relative"
            >
              <div className="absolute left-32 bottom-52 bg-[rgba(0,0,0,0.3)] rounded-md max-w-[40rem] p-4">
                <h2 className="text-white font-semibold text-6xl" style={{ fontFamily: styles.boldNunito}}>
                  {IMAGES[activeImageIndex].stage_name}
                </h2>
                <div className="w-[20rem] bg-white h-[2px] mt-4"></div>
                <p className="text-white mt-5" style={{ fontFamily: styles.poppinsMedium }}>
                  {IMAGES[activeImageIndex].excerpt}
                </p>
                <button style={{ fontFamily: styles.poppinsBold }} className="bg-[#F28D31] px-20 text-xl font-semibold text-white mt-5 rounded-md hover:text-[#F28D31] hover:bg-white transition-all duration-500 ease-out py-4">
                  Book Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="absolute left-10 top-[40%] w-10 h-10 bg-white rounded-full flex justify-center items-center"
          onClick={() => swipeToImage(-1)}
        >
          <img src={LeftArr} alt="left arrow" />
        </button>
        <button
          className="absolute right-10 top-[40%] w-10 h-10 bg-white rounded-full flex justify-center items-center"
          onClick={() => swipeToImage(1)}
        >
          <img src={RightArr} alt="right arrow" />
        </button>

        <div className="thumbnails absolute bottom-10">
          {IMAGES.map((image: Image) => (
            <div
              key={image.id}
              onClick={() => skipToImage(image.id)}
              className="thumbnail-container"
            >
              <img src={image.imageSrc} alt="Musician" />
              <div
                className={`active-indicator ${
                  image.id === activeImageIndex ? "active" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Carousel;
