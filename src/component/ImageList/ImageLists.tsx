import { useContext, useEffect, useState } from "react";
import "./styles.css";
import CelebCard from "../CelebCard/CelebCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { DataContext } from "../../App";


const ImageLists = () => {
  const [isMobile, setIsMobile] = useState(false);
  const celebrities = useContext(DataContext);

  console.log('celebrities: ', celebrities);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    // Set initial mobile state
    handleResize();

    // Listen for resize events and update isMobile state
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-black to-slate-500 px-32 py-10 flex justify-between">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Artist"
            className="w-[500px] p-3 outline-none"
          />
          <button className="bg-[#F28D31] py-[0.63rem] px-8 text-white font-semibold text-xl">
            Search
          </button>
        </div>

        <div className="flex items-center">
          <h3 className="text-white text-3xl mr-4">Filter By</h3>
          <select className="block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500">
            <option value="popularity">Popularity</option>
            <option value="age">Age</option>
            <option value="genre">Genre</option>
            <option value="nationality">Nationality</option>
          </select>
        </div>
      </div>
      {/* columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} */}
      {/* Celebrity Listi */}
      {isMobile ? (
        <div className={``}>
          <ResponsiveMasonry
            style={{
              backgroundColor: "black",
            }}
            columnsCountBreakPoints={{ 0: 1, 430: 1, 750: 2, 900: 5 }}
          >
            {celebrities?.map((celeb, index) => (
              <CelebCard key={index} celeb={celeb} index={index} />
            ))}
          </ResponsiveMasonry>
        </div>
      ) : (
        <div className={``}>
          <Masonry
             style={{
               backgroundColor: "black",
             }}
             columnsCount={4}
           >
             {celebrities?.map((celeb, index) => (
               <CelebCard key={index} celeb={celeb} index={index} />
             ))}
           </Masonry>
         </div>
       )}
    </>
  );
};

export default ImageLists;
