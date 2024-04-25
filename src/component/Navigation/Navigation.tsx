import Logo from "../../assets/logo.png";
import styles from "../../App.module.css";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../utils/use-dimensions";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { Nav } from "./Nav/Nav";
import { Link } from "react-router-dom";
import { useRef } from "react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(17px at 360px 44px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  console.log("height: ", height);

  return (
    <div>
      {/* Desktop - View */}
      <div className="blur"></div>
      <div
        className={`desktop__header justify-between items-center py-[25px] hidden lg:flex fixed top-0 ${styles.customClass} z-20`}
      >
        <img src={Logo} alt="Logo" width={158} />

        <div className={`${styles.navLinks}`}>
          <ul className="flex items-center justify-between">
            <li className={`lg:mx-[40px]`}>
              <a
                className={`text-white text-[18px] opacity-70 hover:opacity-100 hover:text-[#5ACBC9] transition-all duration-500 ease-out ${styles.boldNunito}`}
                href="#"
              >
                Home
              </a>
            </li>
            <li className={`lg:mx-[40px]`}>
              <a
                className={`text-white text-[18px] opacity-70 hover:opacity-100 hover:text-[#5ACBC9] transition-all duration-500 ease-out ${styles.boldNunito}`}
                href="#"
              >
                Services
              </a>
            </li>
            <li className={`lg:mx-[40px]`}>
              <a
                className={`text-white text-[18px] opacity-70 hover:opacity-100 hover:text-[#5ACBC9] transition-all duration-500 ease-out ${styles.boldNunito}`}
                href="#about"
              >
                About us
              </a>
            </li>
          </ul>
        </div>

        <Link to={"#contact"}>
          <button className="rounded-[5px] w-[157px] h-[51px] border-white border-solid border-[1px] group hover:bg-white transition-all duration-500 ease-in-out">
            <p
              className={`${styles.boldNunito} text-white text-[21px] font-bold group-hover:text-[#211F2D]`}
            >
              Contact Us
            </p>
          </button>
        </Link>
      </div>
      {/* Mobile - View */}
      <div className={`flex lg:hidden fixed top-0 z-50 w-full`}>
        <div className="w-full">
          <img src={Logo} width={150} className={`mt-4`} alt="Logo" />

          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div className="background" variants={sidebar} />
            <Nav />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
