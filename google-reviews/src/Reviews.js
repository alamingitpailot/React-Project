


import React, { useState, useEffect } from 'react';
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

const placeId = 'ChIJ1c6qRafFVTcR-Xo5MVvVd4w';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        client.placeDetails({
            params: {
                place_id: placeId,
                fields: ['reviews'],
                key: 'AIzaSyDgSFOL9Zi2sW_Cq_k8mzQsbsDkwGaNWU4',
            },
        }).then((r) => {
            const reviewsData = r.data.result.reviews;
            setReviews(reviewsData);
        });
    }, []);

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.time}>
                    <h3>{review.author_name}</h3>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
