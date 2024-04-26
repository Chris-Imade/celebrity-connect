import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens";
import DetailedPage from "./screens/Detailed/DetailedPage";
import { client } from "./client";

// Define the type for the data context
export type CelebritiesData = {
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

// Create an interface for the context value
interface ContextValue {
  celebrities: CelebritiesData | null;
  loading: boolean;
}

// Create a context for your data
export const DataContext = createContext<ContextValue | null>(null);

function App() {
  const [loading, setLoading] = useState(true);
  const [celebrities, setCelebrities] = useState<CelebritiesData | null>(null);

  useEffect(() => {
    const getCelebrities = async () => {
      const query = '*[_type == "celebrity"]';

      try {
        const data = await client.fetch(query);
        console.log("Fetched celebrities:", data);

        // Only update localStorage if response is not empty
        if (data && data.length > 0) {
          localStorage.setItem("celebrities", JSON.stringify(data));
          console.log("Updated localStorage with celebrities data.");
        } else {
          console.log("Response is empty, leaving localStorage unchanged.");
        }

        setCelebrities(data);
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching celebrities:", error);
        setLoading(false); // Set loading state to false if an error occurs
      }
    };

    // Fetch data from API and update localStorage
    getCelebrities();
  }, []);

  useEffect(() => {
    console.log("Loading state:", loading);
  }, [loading]); // Log loading state to the console whenever it changes

  return (
    <Router>
      {/* Pass data and loading state through context provider */}
      <DataContext.Provider value={{ celebrities, loading }}>
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
