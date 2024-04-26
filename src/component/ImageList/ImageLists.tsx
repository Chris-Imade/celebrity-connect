import { useContext, useEffect, useState } from "react";
import "./styles.css";
import CelebCard from "../CelebCard/CelebCard";
import Masonry from "react-responsive-masonry";
import { DataContext } from "../../App";
import NotFound from "../../assets/404.gif";

const ImageLists = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const celebrities = useContext(DataContext)?.celebrities;
  const loading = useContext(DataContext)?.loading;

  console.log("celebrities: ", celebrities);
  console.log("loading: ", loading);

  const handleSearch = (searchQuery: string) =>
    celebrities?.filter(
      (celeb) =>
        searchQuery &&
        Object.values(celeb).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchQuery?.toLowerCase())
        )
    );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    // Set initial mobile state
    handleResize();

    // Listen for resize events and update isMobile state
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchResult =
    searchQuery.length === 0 ? celebrities : handleSearch(searchQuery);

    return (
      <>
        <div className="bg-gradient-to-b from-black to-slate-500 lg:px-32 py-10 flex flex-col lg:flex-row justify-between">
          <div className="flex flex-row items-center pl-6 lg:pl-0">
            <input
              type="text"
              placeholder="Search Artist"
              className="lg:w-[500px] p-3 outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-[#F28D31] py-[0.63rem] px-8 text-white font-semibold text-xl">
              Search
            </button>
          </div>
  
          <div className="flex items-center pl-6 lg:pl-0 mt-6 lg:mt-0">
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
        {loading ? ( // Show loading indicator if loading is true
          <div className="text-white text-2xl text-center my-8">Loading...</div>
        ) : searchResult?.length === 0 ? (
          <div className="w-full flex justify-center items-center my-32">
            <img src={NotFound} alt="404 gif" />
          </div>
        ) : isMobile ? (
          <div className={``}>
            <Masonry
              style={{
                backgroundColor: "black",
              }}
              columnsCount={1}
            >
              {searchResult?.map((celeb, index) => (
                <CelebCard key={index} celeb={celeb} index={index} />
              ))}
            </Masonry>
          </div>
        ) : (
          <div className={``}>
            <Masonry
              style={{
                backgroundColor: "black",
              }}
              columnsCount={4}
            >
              {searchResult?.map((celeb, index) => (
                <CelebCard key={index} celeb={celeb} index={index} />
              ))}
            </Masonry>
          </div>
        )}
      </>
    );
  };

export default ImageLists;
