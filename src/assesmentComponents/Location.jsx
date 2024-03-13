import React from 'react'
// import bg from '../assets/bg-location-cards.svg'
function Location() {
  const locations=[
    {id: 1,title:"SALT LAKE CITY, UTAH",address: "DAVIS/WEBER COUNTY", number:'(801) 973-6755'},
    {id: 2,title:"UTAH COUNTY NORTH",address: "363 N. University Ave, Suite 101., Provo, UT 84601", number:'(801) 900-4726'},
    {id: 3,title:"DAVIS/WEBER COUNTY",address: "1952 West 5600 South, Suite 4, Roy, Utah 84067", number:'(801) 399-4473'},
  ]
  return (
    <div>
        <div className=" p-5 md:p-10 md:px-40">

          <h2 className='text-2xl font-bold text-center mb-10'>LOCATIONS</h2>
          <div className="md:grid grid-cols-9 gap-5  justify-evenly">
            {
              locations.map((location)=>(
                <div key={location.id} className="col-span-3 mb-10 flex flex-col justify-between rounded-2xl bg-[url('assets/bg-location-cards.svg')] bg-contain bg-[#8F9AA3] bg-no-repeat p-6  md:p-11">
                  <h2 className='text-white font-bold text-xl' >{location.title}</h2>
                  <p className='w-6 h-[1px] bg-white my-5' ></p>
                  <p className='text-white  text-lg' >{location.address}</p>
                  <p className='text-white font-bold text-xl my-5  ' >{location.number}</p>
                  <div className="">

                  <button className='bg-white px-4 py-1 rounded-xl text-lg ' >Available Jobs</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Location