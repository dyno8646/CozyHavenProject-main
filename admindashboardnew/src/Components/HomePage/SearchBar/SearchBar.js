import { useState, useEffect } from "react";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const destinationUrl = "http://localhost:5272/api/Destination/GetAllDestinations";
  const hotelUrl = "http://localhost:5272/api/Hotel/GetAllHotels";

  const fetchData = (value) => {
    const fetchDestinations = fetch(destinationUrl).then((response) => response.json());
    const fetchHotels = fetch(hotelUrl).then((response) => response.json());

    Promise.all([fetchDestinations, fetchHotels])
      .then(([destinations, hotels]) => {
        const destinationResults = destinations.filter((destination) =>
          destination.name.toLowerCase().includes(value.toLowerCase())
        );
        const hotelResults = hotels.filter((hotel) =>
          hotel.name.toLowerCase().includes(value.toLowerCase())
        );
        const results = [...destinationResults, ...hotelResults];
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]);
      });
  };
  

  useEffect(() => {
    if (input.trim() !== "") {
      fetchData(input);
    } else {
      setResults([]);
    }
  }, [input, setResults]);

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <input
        className="form-control border-0 rounded-pill w-85 py-2"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-lime rounded-pill py-2 px-4 position-absolute end-0 me-2"
        color="#9dc209"
        style={{ marginTop: 1 }}
      >
        <i className="ri-search-2-line search__icon" />
      </button>
    </div>
  );
};
