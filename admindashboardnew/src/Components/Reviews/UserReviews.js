import React, { useState, useEffect } from 'react';
import styles from '../ManageBooking/BookingHistory.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { v4 as uuidv4 } from 'uuid';

function UserReviews() {
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:5272/api/User/${username}/GetUserReviews2`)
            .then(response => {
                const formattedReviews = response.data.map((review, index) => ({
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
    const handleDeleteReview = (reviewId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this review?');
        console.log(reviewId)
        if (confirmDelete) {
            axios.delete(`http://localhost:5272/api/Review/DeleteReview?id=${reviewId}`)
                .then(response => {
                    if (response.status === 200) {
                        setReviews(prevReviews => prevReviews.filter(review => review.reviewId !== reviewId));
                        alert('Review deleted successfully.');
                    } else {
                        console.error('Failed to delete review.');
                        alert('Failed to delete review.');
                    }
                })
                .catch(error => {
                    console.error('Error deleting review:', error);
                    alert('Error deleting review.');
                });
        }
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
                        <h3>{sessionStorage.getItem('username').charAt(0).toUpperCase() + sessionStorage.getItem('username').slice(1).toLowerCase()}'s Reviews</h3>
                        <div className="input-group5">
                            <input type="search" placeholder="Search Data..." />
                            <img src="images/search.png" alt="" />

                        </div>
                        <button className="bttn" style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "10%", height: "30px", borderRadius: "20px" }} type="button" onClick={() => navigate('/UserDash')}>Go Back</button>
                        {/* Export file options */}
                    </section>
                    <section className="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id <span className="icon-arrow">↑</span></th>
                                    <th>Profile Pic <span className="icon-arrow">↑</span></th>
                                    <th>HotelName <span className="icon-arrow">↑</span></th>
                                    <th>Rating <span className="icon-arrow">↑</span></th>
                                    <th>Comment <span className="icon-arrow">↑</span></th>
                                    <th>DatePosted <span className="icon-arrow">↑</span></th>
                                    <th>EditReview <span className="icon-arrow">↑</span></th>
                                    <th>DeleteReview <span className="icon-arrow">↑</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map(review => (
                                    <tr key={review.id}>
                                        <td>{review.id}</td>
                                        <td><img src="images/doctor.png" />{(review.username).charAt(0).toUpperCase() + (review.username).slice(1).toLowerCase()}</td>
                                        <td>{review.hotelName}</td>
                                        <td>{review.rating}</td>
                                        <td>{review.comment}</td>
                                        <td>{review.datePosted}</td>
                                        <td>
                                            <button
                                                className="bttn"
                                                style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "80%", height: "30px" }}
                                                onClick={() => {
                                                    sessionStorage.setItem('userReviewId', review.id);
                                                    navigate('/editreview');
                                                }}
                                                type="button"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="bttn"
                                                style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "80%", height: "30px", backgroundColor: "red" }}
                                                type="button"
                                                onClick={() => handleDeleteReview(review.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserReviews;
