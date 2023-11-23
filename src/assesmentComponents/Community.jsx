import React from 'react'
import image2 from '../assets/image2.webp'
function Community() {

  return (
    <div>

        <div className=" block md:grid grid-cols-5 p-5 md:px-28  md:py-24 gap-x-10">
            <div className="w-full col-span-3">
                <img src={image2} className='w-full' alt="" />
            </div>
            <div className="col-span-2">
            <div className="w-max-[400px] flex flex-col h-full justify-between">
          <div className="">
          <h2 className='text-4xl font-bold'>Come Join Our  Community</h2>
                <p className="mt-10 md:text-lg">At LG Resources, we believe jobs can change lives. We have helped thousands of job seekers across the U.S. find temporary and long-term employment in jobs they love. Whether you are an industry veteran or seeking your first job, LG is here to help you find work that matches your skills.</p>
          </div>
          <div className="">

                <button className='bg-[#ef7123] rounded-lg text-white mt-5 text-base px-2 md:px-5 py-3'>Apply with LG</button>
          </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Community