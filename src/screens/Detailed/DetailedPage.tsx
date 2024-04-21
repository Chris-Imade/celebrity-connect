import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "../../component/Navigation/Navigation";
import styles from "../../App.module.css";
import Footer from "../../component/Footer/Footer";
import { client, urlFor } from "../../client";

interface Resp {
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
}

const DetailedPage = () => {
  const { slug } = useParams();

  const [details, setDetails] = useState<Resp[] | null>(null);

  // Retrieve data from local storage on initial render
  useEffect(() => {
    const storedDetails = localStorage.getItem("celebrityDetails");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    if (details) {
      localStorage.setItem("celebrityDetails", JSON.stringify(details));
    }
  }, [details]);

  console.log("Details ", details);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const query = `*[_type == "celebrity" && slug.current == "${slug}"]`;
    client
      .fetch(query)
      .then((data) => setDetails(data))
      .catch((err) => console.log("Error: ", err.message));
  }, [slug]); // Update data when slug changes

  return (
    <>
      <div
        className={`app ${styles.heroBg} ${styles.navBar} lg:px-[123px] px-[20px] h-[100vh] lg:pt-[12rem] pt-8rem`}
      >
        <motion.div
          className={`${styles.progressBar}`}
          style={{ scaleX, zIndex: 200 }}
        />
        <Navigation />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="lg:w-1/2 mx-auto mb-8 lg:mb-0">
            <img
              className="w-full h-auto lg:h-full max-h-[32rem] object-contain"
              src={details ? urlFor(details[0].image.asset).url() : ""}
              alt={details ? details[0]?.name : "some picture"}
            />
          </div>
          {details && (
            <div className="lg:w-1/2 lg:ml-16">
              <h1
                style={{ fontFamily: styles.boldNunito }}
                className="text-white text-4xl mb-4"
              >
                {details[0]?.name}
              </h1>
              <p
                style={{ fontFamily: styles.boldNunito }}
                className="text-white mb-4"
              >
                {details[0]?.date}
              </p>
              <p
                style={{ fontFamily: styles.boldNunito }}
                className="text-white mb-4"
              >
                {details[0]?.time}
              </p>
              <p
                style={{ fontFamily: styles.boldNunito }}
                className="text-white mb-4"
              >
                {details[0]?.address}
              </p>
              <p
                style={{ fontFamily: styles.boldNunito }}
                className="text-white mb-4"
              >
                {details[0]?.id_number}
              </p>
              <p
                style={{ fontFamily: styles.boldNunito }}
                className="text-white mb-4"
              >
                {details[0]?.excerpt}
              </p>
              <a href="https://forms.gle/3KKrXE3LHr9Y44AW8" target="_blank">
                <button
                  style={{ fontFamily: styles.poppinsBold }}
                  className="bg-[#F28D31] text-xl font-semibold text-white mt-5 rounded-md w-full hover:text-[#F28D31] hover:bg-white transition-all duration-500 ease-out py-4"
                >
                  Book Now
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailedPage;
