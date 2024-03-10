import React, { useState, useEffect } from 'react';
import styles from '../ManageBooking/BookingHistory.css';
import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Review() {
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const hotelId = sessionStorage.getItem('hotelId');
        axios.get(`http://localhost:5272/api/Hotel/HotelReviews?id=${hotelId}`)
        .then(response => {
            const formattedReviews = response.data.map((review,index) => ({
                ...review,
                id: index + 1,
                datePosted: formatDate(review.datePosted)
            }));
        // .then(response => {
            //     const reviewsWithIds = response.data.map(review => ({
            //         id: uuidv4(),
            //         ...review
            //     }));
                setReviews(formattedReviews);
            })
            .catch(error => {
                console.error('Error fetching user reviews:', error);
            });
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    };


    useEffect(() => {
        const search = document.querySelector('.input-group5 input');
        const tableRows = document.querySelectorAll('tbody tr');
        const tableHeadings = document.querySelectorAll('thead th');

        // 1. Searching for specific data of HTML table
        const searchTable = () => {
            tableRows.forEach((row, i) => {
                let tableData = row.textContent.toLowerCase();
                let searchData = search.value.toLowerCase();
                row.classList.toggle('hide', tableData.indexOf(searchData) < 0);
                row.style.setProperty('--delay', i / 25 + 's');
            });

            document.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, i) => {
                visibleRow.style.backgroundColor = i % 2 === 0 ? 'transparent' : '#0000000b';
            });
        };

        search.addEventListener('input', searchTable);

        // 2. Sorting | Ordering data of HTML table
        tableHeadings.forEach((head, i) => {
            let sort_asc = true;
            head.onclick = () => {
                tableHeadings.forEach(head => head.classList.remove('active'));
                head.classList.add('active');

                document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
                tableRows.forEach(row => {
                    row.querySelectorAll('td')[i].classList.add('active');
                });

                head.classList.toggle('asc', sort_asc);
                sort_asc = head.classList.contains('asc') ? false : true;

                sortTable(i, sort_asc);
            };
        });

        // Cleanup function
        return () => {
            search.removeEventListener('input', searchTable);
            tableHeadings.forEach(head => {
                head.removeEventListener('click', sortTable);
            });
        };
    }, []);

    function sortTable(column, sort_asc) {
        const tableRows = document.querySelectorAll('tbody tr');
        [...tableRows]
            .sort((a, b) => {
                let firstRow = a.querySelectorAll('td')[column].textContent.toLowerCase();
                let secondRow = b.querySelectorAll('td')[column].textContent.toLowerCase();
                return sort_asc ? (firstRow < secondRow ? 1 : -1) : firstRow < secondRow ? -1 : 1;
            })
            .map(sortedRow => document.querySelector('tbody').appendChild(sortedRow));
    }

    return (
        <div className='body3'>
            <div className={styles}>
                <div className="table" id="customers_table">
                    <section className="table__header">
                    {reviews.map(review => (
                    <h3>{(review.hotelName).charAt(0).toUpperCase() + (review.hotelName).slice(1).toLowerCase()}'s Reviews</h3>
                    ))}
                        <div className="input-group5">
                            <input type="search" placeholder="Search Data..." />
                            <img src="images/search.png" alt="" />
                        </div>
                        <button className="bttn" style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "10%", height: "30px", borderRadius: "20px" }} type="button" onClick={() => navigate('/hotels')}>Go Back</button>
                    </section>
                    <section className="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id <span className="icon-arrow">↑</span></th>
                                    <th>HotelName <span className="icon-arrow">↑</span></th>
                                    <th>CustomerName <span className="icon-arrow">↑</span></th>
                                    <th>Rating <span className="icon-arrow">↑</span></th>
                                    <th>Comment <span className="icon-arrow">↑</span></th>
                                    <th>DatePosted <span className="icon-arrow">↑</span></th>
                                </tr>
                            </thead>
                            <tbody>
                            {reviews.map(review => (
                                    <tr key={review.id}>
                                        <td>{review.id}</td>
                                        <td>{review.hotelName}</td>
                                        <td><img src={review.profilePic} />{(review.username).charAt(0).toUpperCase()+(review.username).slice(1).toLowerCase() }</td>
                                        <td>{review.rating}</td>
                                        <td>{review.comment}</td>
                                        <td>{review.datePosted}</td>
                                    </tr>
                                ))}
                                {/* <tr>
                                    <td>1</td>
                                    <td><img src="images/Zinzu Chan Lee.jpg" alt />Zinzu Chan Lee</td>
                                    <td>Seoul</td>
                                    <td>17 Dec, 2022</td>
                                    <td><p className="status delivered">Delivered</p></td>
                                    <td><strong>$128.90</strong></td>
                                </tr> */}
                            </tbody>

                        </table>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Review;
