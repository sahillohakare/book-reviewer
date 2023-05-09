import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { ThreeCircles } from 'react-loader-spinner';
import { reviewsRef } from '../firebase/firebase';
import { addDoc } from 'firebase/firestore';
import swal from 'sweetalert';

const Reviews = () => {
    const [rating, setRating] = useState(0);
    const [loading, setloading] = useState(true);
    const sendReview = async () => {
        try {
            swal({
                title: "Review sent!",
                icon: "success",    
                button: false,
                timer: 3000
            })
        } catch (error) {
            swal({
                title: error.message,
                icon: "success",    
                button: false,
                timer: 3000
            })
        }
    }
    return (
        <div className='mt-4 border-t-2 border-gray-700 w-full'>
            <ReactStars
                size={30}
                half={true}
                onChange={(rate) => setRating(rate)}
            />
            <input
                placeholder='Share your thoughts..'
                className='w-full p-2 outline-none bg-black'
            />
            <button className='bg-green-600 w-full p-1'>
                {loading ? <div className='h-5 flex w-full justify-center items-center'>
                    <ThreeCircles height={15} color="white" /></div> : "Share"}
            </button>

        </div>
    )
}

export default Reviews