import React from 'react'
import image3 from '../assets/image3.webp'
function Program() {

  return (
    <div className='bg-[#E3E8ED]'>

        <div className=" block md:flex justify-center p-5 md:px-28  md:py-24 ">
                <div className="max-w-md basis-2/3">
                <img src={image3} className='w-full' alt="" />
            </div>
            <div className="basis-1/3">
            <div className="max-w-md flex flex-col h-full justify-between">
          <div className="">
          <h2 className='text-5xl font-bold'>Health Savings Program</h2>
              <p className="mt-10 md:text-lg">LG Resources offers employees a health savings program! You can get large discounts on prescription drugs, dental and vision services, diabetic supplies, MRI and CT scans, lab tests, alternative medicine, and more. We also give you telemedicine access.
              <br />  
              <br />  
This program is not insurance, but it does provide great discounts. The LG Advantage health savings program is open to all part-time and full-time employees, 1099 contractors, and seasonal workers. <a target='_blank' className='text-[#ef7123]'  href=""> Get in touch with us</a> to learn more.</p>
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

export default Program