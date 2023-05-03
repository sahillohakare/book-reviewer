import React, { useState } from 'react'
import ReactStars from 'react-stars';
const Cards = () => {
    const [data, setData] = useState([
        {
            name: "Atomic Habits",
            year: "2017",
            rating: 5,
            img: "https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png"
        },
        {
            name: "Atomic Habits",
            year: "2017",
            rating: 3,
            img: "https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png"
        },
        {
            name: "Atomic Habits",
            year: "2017",
            rating: 3.5,
            img: "https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png"
        },
        {
            name: "Atomic Habits",
            year: "2017",
            rating: 4,
            img: "https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png"
        }
        , {
            name: "Atomic Habits",
            year: "2017",
            rating: 1,
            img: "https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png"
        }
        ,
        {
            name: "Atomic Habits",
            year: "2017",
            rating: 4.5,
            img: "https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png"
        },
        {
            name: "Atomic Habits",
            year: "2017",
            rating: 2,
            img: "https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png"
        }
    ]);
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>
            {
                data.map((e, i) => {
                    return (
                        <div key={i} className="card text-lg font-medium shadow-lg p-1 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-400">
                            <img className="h-72" src={e.img} alt='Broken' />
                            <h1><span className='text-gray-500'>Name:</span> {e.name}</h1>
                            <h1 className=' flex items-center '><span className='text-gray-500 mr-1'>Rating:</span>
                            <ReactStars 
                            size={20}
                            half={true}
                            value={e.rating}
                            edit={false}/></h1>
                            <h1><span className='text-gray-500'>Year:</span> {e.year}</h1>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Cards