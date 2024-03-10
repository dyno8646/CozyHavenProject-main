import React, { useState } from 'react';
import styles from './Filters.css';
import { useNavigate } from 'react-router-dom';
import { SearchBar2 } from "../Searchbar2/SearchBar2";
import { SearchResultsList2 } from '../Searchbar2/SearchResultList2';

function Filters() {

    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const destinationName = event.target.elements.city.value;
        const checkIn = event.target.elements['check-in'].value;
        const checkOut = event.target.elements['check-out'].value;
        const adults = event.target.elements.adult.value;
        const children = event.target.elements.children.value;

        if (new Date(checkOut) <= new Date(checkIn)) {
            alert('Check-out date should be greater than check-in date');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5272/api/Hotel/GetHotelsByDestinationName?destinationName=${destinationName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            let destinationId;
            data.forEach(item => {
                if (item.destinationId) {
                    destinationId = item.destinationId;
                    return;
                }
            });

            if (!destinationId) {
                throw new Error('Destination ID not found in data');
            }
            sessionStorage.setItem('destinationId', destinationId);
            sessionStorage.setItem('checkIn', checkIn);
            sessionStorage.setItem('checkOut', checkOut);
            sessionStorage.setItem('adults', adults);
            sessionStorage.setItem('children', children);


            console.log('Data:', data);
            navigate('/hotels')
        } catch (error) {
            console.error('Error:', error.message);
            alert('Destination not found. Please enter a valid destination.');
        }

    };
    const getCurrentDate = () => {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        const yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        return yyyy + '-' + mm + '-' + dd;
    };
    const handleDateSelection = () => {
        const checkInDate = document.getElementById("inputCheckIn").value;
        const checkOutDate = document.getElementById("inputCheckOut").value;

        const dates = document.querySelectorAll('input[type="date"]');
        dates.forEach(dateInput => {
            dateInput.classList.remove("selected-check-in");
            dateInput.classList.remove("selected-check-out");

            if (dateInput.value === checkInDate) {
                dateInput.classList.add("selected-check-in");
            }

            if (dateInput.value === checkOutDate) {
                dateInput.classList.add("selected-check-out");
            }
        });
    };



    return (
        <div className={styles}>
            <div className="tm-main-content" id="top">
                <div className="tm-section tm-bg-img" id="tm-section-1">
                    <div className="tm-bg-white ie-container-width-fix-2">
                        <div className="container19 ie-h-align-center-fix">
                            <div className="row">
                                <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    <h3 text-align="center">Enquire Here</h3>
                                    <form onSubmit={handleSubmit} className="tm-search-form tm-section-pad-2">
                                        <div className="search2">
                                            <SearchBar2 setResults={setResults} />
                                            {results && results.length > 0 && <SearchResultsList2 results={results} />}
                                        </div>
                                        <div className="form-row tm-search-form-row">

                                            <div className="form-group tm-form-element tm-form-element-50">
                                                <i className="fa fa-calendar fa-2x tm-form-element-icon" />
                                                <input name="check-in" type="date" className="form-control" id="inputCheckIn" placeholder="Check In" min={getCurrentDate()} onChange={handleDateSelection} required />
                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-50">
                                                <i className="fa fa-calendar fa-2x tm-form-element-icon" />
                                                <input name="check-out" type="date" className="form-control" id="inputCheckOut" placeholder="Check Out" min={getCurrentDate()} onChange={handleDateSelection} required />
                                            </div>
                                        </div>
                                        <div className="form-row tm-search-form-row">
                                            <div className="form-group tm-form-element tm-form-element-2">
                                                <select name="adult" className="form-control tm-select" id="adult" required>
                                                    <option value>Adult</option>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                </select>
                                                <i className="fa fa-2x fa-user tm-form-element-icon" />
                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-2">
                                                <select name="children" className="form-control tm-select" id="children">
                                                    <option value>Children</option>
                                                    <option value={0}>0</option>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                </select>
                                                <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small" />
                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-2">
                                                <select name="room" className="form-control tm-select" id="room">
                                                    <option value>Room</option>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                </select>
                                                <i className="fa fa-2x fa-bed tm-form-element-icon" />
                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-2">
                                                <button type="submit" className="btn btn-primary5 tm-btn-search">Check Availability</button>
                                            </div>
                                        </div>
                                        <div className="form-row clearfix pl-2 pr-2 tm-fx-col-xs">
                                            <p className="tm-margin-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <a href="#" className="ie-10-ml-auto ml-auto mt-1 tm-font-semibold tm-color-primary">Need Help?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Filters;