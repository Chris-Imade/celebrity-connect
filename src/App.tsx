import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens";
import DetailedPage from "./screens/Detailed/DetailedPage";
import { client } from "./client";

// Define the type for the data context
type CelebritiesData = {
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
}[];

// Create a context for your data
export const DataContext = createContext<CelebritiesData | null>(null);

function App() {
  const [celebrities, setCelebrities] = useState<CelebritiesData | null>(null);

  useEffect(() => {
    const getCelebrities = () => {
      const query = '*[_type == "celebrity"]';

      client
        .fetch(query)
        .then((data) => {
          setCelebrities(data);
          // Save fetched data to localStorage
          localStorage.setItem("celebrities", JSON.stringify(data));
        })
        .catch((err) => console.log("Error: ", err.message));
    };

    // Check if data exists in localStorage
    const storedCelebrities = localStorage.getItem("celebrities");
    if (storedCelebrities) {
      // If data exists, parse and set it to state
      setCelebrities(JSON.parse(storedCelebrities));
    } else {
      // If no data in localStorage, fetch from API
      getCelebrities();
    }
  }, []);

  return (
    <Router>
      {/* Pass data through context provider */}
      <DataContext.Provider value={celebrities}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:slug" element={<DetailedPage />} />
          </Routes>
        </div>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
