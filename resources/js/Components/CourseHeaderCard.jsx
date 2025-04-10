import React from 'react'

function CourseHeaderCard({ tagLabel, img, title, bannerText = '' }) {
  return (
    <div className="overflow-hidden shadow-md">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-gradient-to-l from-[#F84824] to-[#FFA600] text-white px-4 py-1 rounded-br-lg z-10">
          {tagLabel}
        </div>
        <div className=" bg-gradient-to-r from-orange-500 to-blue-500 relative">
          <img
            className="h-full w-full object-contain"
            src={img}
            alt="Sales professional with data visualizations"
          />

        </div>
        {bannerText && <div className="absolute bottom-0 w-full py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center font-semibold">
          {bannerText}
        </div>}
      </div>
      <div className="p-4 bg-white">
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
    </div>
  )
}

export default CourseHeaderCard
