import React from 'react'
import{ data} from "../constant"

function Resume() {
  return (
    <div>
        <div className="container  mx-auto  w-4/5 mt-5">

           <main  className='  border-4   p-3 ' >
            <div className='w-4/5 mx-auto mb-3  '>
          <h2 className='font-bold'>{data.name}</h2>
          <h2 className='font-bold'>{data.mobileNumber}</h2>
          <h2 className='font-bold  '>{data.emailId}</h2>
          <h2 className='italic'>{data.summary}</h2>
            </div>
            <hr  />
            <div className='w-4/5 mx-auto mb-3   '>
          <h2 className='font-bold'>Skills</h2>
          <div className='w-11/12 grid gap-4 grid-cols-2 md:grid-cols-6 ' >
          {data.skills.map((skill) =>(
            <div className='' key={skill.id} >
                <div>
                  {true?<></>:<img src={skill.icon} width={50} />}
                  
                  <h2>{skill.name}</h2>
                </div>
            </div>
          ))}
</div>
            </div>
            <hr  />
            <div className='organization w-4/5 mb-3 mx-auto'>
{data.organizations.map((organization)=>(
  <div>
  <h2 className='font-bold'  >{organization.name}</h2>
  <div className='flex' >
  <p className='italic text-sx'>{organization.startDate} - </p>
  <p className='italic'>{organization.endDate}</p>
  </div>
  <ul>

  {organization.description.map((item,i)=>(
    <li className='list-disc' key={i} >{item}</li>
    ))}
    </ul>
  </div>

))}
            </div>
            
           </main>
        </div>
    

    </div>
  )
}

export default Resume