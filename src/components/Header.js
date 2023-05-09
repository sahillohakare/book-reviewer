import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' sticky top-0 z-10 bg-black text-3xl text-red-500 font-bold border-b-2 border-gray-500 flex justify-between items-center'>
            <Link to={'/'}>
            <span> Book
                <span className="text-white">
                    Reviewer
                </span>
            </span>
            </Link>
            <Link to={'/addbook'}><h1 className='text-lg flex items-center justify-center cursor-pointer'>
                <Button > <AddIcon className='mr-1' color='secondary' />
                    <span className='text-white'>ADD NEW</span>
                </Button>
            </h1>
            </Link>
        </div>
    )
}

export default Header