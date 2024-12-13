import React, { useState, useEffect } from "react";
import './home-reviewCarousel.css'
import reviews from './home-reviewsData'

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ReviewCarousel() {

  const [shuffledReviews, setShuffledReviews] = useState(reviews);
  
  useEffect(() => {
    setShuffledReviews(shuffleArray(reviews));
  }, []);

  return (
    <div className="review-container">
      <header>From Our Customers</header>
      <hr />
      <div
        className="review-carousel"
        style={{
          "--review-count": reviews.length
        }}
      >
        {shuffledReviews.map((review, index) => (
          <div key={index}>
            <header className="carousel-header">{review.title}</header>
            <p className="carousel-body">&quot;{review.body}&quot;</p>
            <p className="carousel-signature">-- {review.signature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewCarousel;