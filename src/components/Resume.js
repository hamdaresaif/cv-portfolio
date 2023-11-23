import React, { useState } from "react";
import { data } from "../constant";

function Resume({design}) {

  return (
    <div>     
 
      <div className="container  mx-auto mt-8  my-16 mr-0 scroll-smooth">
   
        <main className=" border-2 md:border-4 md:w-8/12 pl-6 md:pl-10 mx-auto  md:p-3 pb-5 ">
          <div className=" personal-details   mx-auto my-5   ">
            <div className=" justify-between">
            <div className="flex items-center justify-between">
            <h2 className="font-bold  text-2xl sm:text-4xl">{data.name}</h2>
              <div className="text-center ">
            <img className=" w-16 sm:w-20 rounded-full " src={data.photo}/>
              <a href={data.linkedIn} target="_blank" className="flex justify-center"><img src='https://img.icons8.com/ios-filled/100/linkedin.png' className="w-5 "  /></a>
           </div>
            </div>
            {/* <div> */}
            <h2 className="font-bold">{data.mobileNumber}</h2>
            <h2 className="font-bold  ">{data.emailId}</h2>
            {/* </div> */}
            </div>
            <h2 className="italic text-sm">{data.summary}</h2>
          </div>
          <hr className="my-3" />
          <div className="skills  mx-auto     ">
            <h2 className="font-bold text-xl">Skills</h2>
            <div className="w-11/12 grid gap-4 grid-cols-2  sm:grid-cols-4 lg:grid-cols-6  ">
              {data.skills.map((skill) => (
                <div className="" key={skill.id}>
                  <div className="">
                    {design ? <img src={skill.icon} width={40} /> : <></>}

                    <h2 className="text-sm">{skill.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-3" />
          <div className="organization   mx-auto ">
          <h2 className="font-bold text-xl">Experience</h2>
            {data.organizations.map((organization) => (
              <div className="mt-5">
                <div className="sm:flex justify-between items-center">
                <div className="flex justify-between items-center">
                <h2 className="font-bold sm:text-lg text-base">{organization.name}</h2>
                  <img src={organization.logo} className="w-14 ml-2" />
                </div>
                <div className="flex mt-3 sm:mt-0">
                  <p className="italic text-xs">{organization.startDate} - </p>
                  <p className="italic text-xs">{organization.endDate}</p>
                </div>
                </div>
                <ul>
                  {organization.description.map((item, i) => (
                    <li className="list-disc text-sm" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr className="my-3" />
          <div className="Education   mx-auto">
            <div className="mt-5">
              <h2 className="font-bold text-lg">Education</h2>
              <h2 className="sm:font-bold ">{data.education}</h2>
              <div className="flex gap-2">
                <p className="italic text-xs">{data.educationAbbrivation} </p>
                <p className="italic text-xs">
                  {data.university}-{data.batch}
                </p>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="Achivements   mx-auto">
            <div className="mt-5">
              <h2 className="font-bold text-lg">
              Achievements & Certifications
              </h2>
              <div className="sm:grid sm:grid-cols-3">
                {data.achivements.map((achivement) => (
                  // <h2 className="font-bold ">{data.education}</h2>
                  <>
                    {/* {design ? (
                 <></>
                    ) : ( */}
                    
                      <div className={`mb-4 ${[1,3].includes(achivement.id)?'col-span-1':'col-span-2'}`}>
                  
                      <p className="font-semibold text-sm flex items-center justify-start">
                        {achivement.title} -{" "}
                        <span className=" font-normal text-xs">
                          {" "}
                          {achivement.date}
                        </span>{" "}
                        <a className="ml-2" href={achivement.link} target="_blank">
                       <img  width={14} src={'https://img.icons8.com/ios-filled/100/link--v1.png'}/>
                      </a>
                      </p>

                      <p className="italic text-xs">
                        {achivement.organization}
                      </p>
                  
                    </div>
                    {/* )} */}
                  </>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Resume;
