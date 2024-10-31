import React, { FC, useState } from 'react';

import user from '../assets/img/user.svg';
import leftArrow from '../assets/img/left-arrow.svg';
import rightArrow from '../assets/img/right-arrow.svg';
import reviews from '../assets/reviews';

const Reviews: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const nextPage = () => {
        if (currentPage < Math.ceil(reviews.length / reviewsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    return (
        <div id="reviews" className="main__reviews">
            <h2 className="main__reviews-title">Отзывы</h2>
            <ul className="main__reviews__ul">
                <button
                    className="main__reviews__ul-btn main__reviews__ul-left-btn"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    <img src={leftArrow} alt="" />
                </button>
                {currentReviews.map((review) => (
                    <li key={review.id} className="main__reviews__ul-li">
                        <div className="main__reviews__ul-li__div">
                            <div className="main__reviews__ul-li__div__title">
                                <div className="main__reviews__ul-li__div__title-img">
                                    <img src={user} alt="" />
                                </div>
                                <div className="main__reviews__ul-li__div__title-initials">
                                    <span>{review.username}</span>
                                    <span>{review.city}</span>
                                </div>
                            </div>
                            <div className="main__reviews__ul-li__div-txt">
                                <span>{review.text}</span>
                            </div>
                        </div>
                    </li>
                ))}
                <button
                    className="main__reviews__ul-btn main__reviews__ul-right-btn"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    <img src={rightArrow} alt="" />
                </button>
            </ul>
            <div className="main__reviews__dots">
                <div className="main__reviews__dot">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index}
                            style={{
                                backgroundColor: currentPage === index + 1 ? '#2A6CEA' : '#C2C8CD',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
