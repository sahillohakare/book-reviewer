import React from 'react'

const Cards = () => {
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>
            <div className="card text-lg font-bold shadow-lg p-2 hover:-translate-y-1 cursor-pointer">
                <img  className="h-72" src='https://jamesclear.com/wp-content/uploads/2022/12/atomic-habits-dots.png'/>
                <h1>Atomic Habits</h1>
                <h1>Rating: 5</h1>
                <h1>Year: 2017 </h1>
            </div>
        </div>
        )
}

export default Cards