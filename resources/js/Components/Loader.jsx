import React from 'react'
import { Puff } from 'react-loader-spinner'

function Loader({ show }) {
    return (
        <div>
            {show && <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex justify-center items-center z-50'>
                <Puff visible={true} color='#E88700' />
            </div>}
        </div>
    )
}

export default Loader