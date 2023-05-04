import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import ReactStars from 'react-stars';
import { getDocs } from 'firebase/firestore';
import { bookRef } from '../firebase/firebase';
const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const data = await getDocs(bookRef);
                data.forEach((doc)=>{
                    setData((prv)=>[...prv,doc.data()])
                })
                setLoading(false);

            } catch (error) {

            }
        }
        getData();
    }, [])

    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>

            {
                loading ?<div className='w-full flex justify-center items-center min-h-screen'> <ThreeDots height={40} color="white" /> </div> :

                    data.map((e, i) => {
                        return (
                            <div key={i} className="card text-lg font-medium shadow-lg p-1 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-400">
                                <img className="h-72" src={e.image} alt='Broken' />
                                <h1><span className='text-gray-500'>Name:</span> {e.title}</h1>
                                <h1 className=' flex items-center '><span className='text-gray-500 mr-1'>Rating:</span>
                                    <ReactStars
                                        size={20}
                                        half={true}
                                        value={4}
                                        edit={false} /></h1>
                                <h1><span className='text-gray-500'>Year:</span> {e.year}</h1>
                            </div>
                        )
                    })
            }


        </div>
    )
}

export default Cards