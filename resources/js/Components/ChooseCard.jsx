import React from 'react'

function ChooseCard({ src, title, sub_heading }) {
    return (
        <div className='cursor-pointer group border-t border-white md:px-20 pt-6 pb-20'>
            <img src={src} class="mb-4 bg-gray-600 h-10 w-10 rounded-full p-2 group-hover:bg-[#E88700]" alt="" />
            <h5 class="text-lg font-roboto font-bold">{title}</h5>
            <p class="text-gray-400">{sub_heading}</p>
        </div>
    )
}

export default ChooseCard