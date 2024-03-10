import { useState, useEffect } from "react";

import "./SearchBar2.css";

export const SearchBar2 = ({ setResults }) => {
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
    <div className="input-wrapper1">
      <div className="form-group tm-form-element tm-form-element-100">
        <i className="fa fa-map-marker fa-2x tm-form-element-icon" />
        <input
          name="city"
          type="text"
          className="form-control1"
          id="inputCity"
          placeholder="Type your destination ID..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};
