import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/base';
const Header = () => {
    return (
        <div className='text-3xl text-red-500 font-bold border-b-2 border-gray-500 flex justify-between items-center'>
            <span> Book
                <span className="text-white">
                    Reviewer
                </span>
            </span>
            <h1 className='text-lg flex items-center justify-center cursor-pointer'>
               <Button > <AddIcon className='mr-1' color='secondary' />
                <span className='text-white'>ADD NEW</span>
                </Button>
            </h1>
        </div>
    )
}

export default Header