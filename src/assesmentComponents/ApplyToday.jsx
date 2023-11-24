import React from 'react'
import image4 from '../assets/image4.webp'
import { FileDoneOutlined } from '@ant-design/icons'

function ApplyToday() {
  return (
    <div>
        <div className=" p-5 md:px-32 md:py-20 bg-[#ef7123]">
            <div className="md:grid grid-cols-2 gap-10">
                <div className="image-container col-span-1 mb-5 md:m-0">
                    <img src={image4} className='rounded-3xl'  alt="" />
                </div>
                <div className="content col-span-1 flex flex-col justify-between">
                    <div className="">

                <span className="bg-white p-5  !inline-flex items-center rounded-2xl mb-5 md:m-0">
                        <FileDoneOutlined style={{ fontSize: '32px', color: '#ef7123' }} className='' />
              </span>
                    </div>
              <h2 className='text-white font-bold text-4xl mb-5 md:m-0 ' >APPLY TO ONE OF OUR JOB POSTINGS TODAY</h2>
              <div className="">
                <button className=' text-lg  px-5 py-3 bg-white rounded-lg ' >Apply Now</button>
              </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ApplyToday