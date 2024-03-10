import React from 'react'
import { useState } from "react";
import { SearchBar } from "../HomePage/SearchBar/SearchBar";
import { SearchResultsList } from "../HomePage/SearchBar/SearchResultList";
import Filters from './Filters/Filters';

function Home() {
    const [results, setResults] = useState([]);
    return (
        <div className="home-section">
            <div className="container d-flex align-items-center justify-content-center fs-1 text-white flex-column">
                <h2 className="display-3 text-white mb-3 animated slideInDown" id="main">Welcome To Cozy Haven</h2>
                <h2 className="display-3 animated slideInDown" id="main2">Visit and Plan your stay at <span className="changecontent" /></h2>
                {/* <div className="position-relative w-50 mx-auto mt-4 animated slideInDown">
                    <input className="form-control border-0 rounded-pill w-85 py-3 ps-4 pe-5" type="text" placeholder="Eg: India" />
                    <button type="button" className="btn btn-lime rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" color="#9dc209" style={{ marginTop: 7 }}><i className="ri-search-2-line search__icon" /></button>
                    {/*https://www.youtube.com/watch?v=SDRmLPGvaYE&list=PLHktALTk_XeANtbvvfEyVM7fDEWcWnma4&index=1
                </div> */}
                {/* <div className="position-relative w-50 mx-auto mt-4 animated slideInDown search-bar-container">
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                </div> */}

            </div>
            <Filters />
            <br />
            <br />
        </div>

    );
}
export default Home;
