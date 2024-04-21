import styles from "../App.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "../component/Navigation/Navigation";
import Carousel from "../component/Carousel/Carousel";
import ImageLists from "../component/ImageList/ImageLists";
import AboutUs from "../component/About/AboutUs";
import Footer from "../component/Footer/Footer";
import ContactUs from "../component/Contact/ContactUs";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div
        className={`app ${styles.heroBg} ${styles.navBar} lg:px-[123px] px-[20px]`}
      >
        <motion.div
          className={`${styles.progressBar}`}
          style={{ scaleX, zIndex: 200 }}
        />
        <Navigation />
        <Carousel />
      </div>
      <ImageLists />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
