import React, { useState } from "react";
import { data } from "../constant";
import { Space, Switch } from "antd";

function Resume() {
  const [design , setDesign]=useState(0)
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      <div className="container  mx-auto mt-8  my-16">
        <main className=" border-2 md:border-4 md:w-8/12 pl-6 md:pl-10 mx-auto  md:p-3 pb-5 ">
          <div className=" personal-details   mx-auto my-5  ">
            <h2 className="font-bold">{data.name}</h2>
            <h2 className="font-bold">{data.mobileNumber}</h2>
            <h2 className="font-bold  ">{data.emailId}</h2>
            <h2 className="italic text-sm">{data.summary}</h2>
          </div>
          <hr className="my-3" />
          <div className="skills  mx-auto     ">
            <h2 className="font-bold">Skills</h2>
            <div className="w-11/12 grid gap-4 grid-cols-2  sm:grid-cols-4 lg:grid-cols-6  ">
              {data.skills.map((skill) => (
                <div className="" key={skill.id}>
                  <div>
                    {design==0 ? <></> : <img src={skill.icon} width={50} />}

                    <h2 className="text-sm">{skill.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-3"/>
          <div className="organization   mx-auto ">
            {data.organizations.map((organization) => (
              <div className="mt-5">
                <h2 className="font-bold text-lg">{organization.name}</h2>
                <div className="flex">
                  <p className="italic text-xs">{organization.startDate} - </p>
                  <p className="italic text-xs">{organization.endDate}</p>
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
          <hr className="my-3"/>
          <div className="Education   mx-auto">
      
              <div className="mt-5">
                <h2 className="font-bold text-lg">Education</h2>
                <h2 className="font-bold ">{data.education}</h2>
                <div className="flex gap-2">
                  <p className="italic text-xs">{data.educationAbbrivation} </p>
                  <p className="italic text-xs">{data.university}-{data.batch}</p>
                </div>
            
              </div>
     
          </div>
        </main>
      </div>
      <Space direction="vertical">
      <Switch onChange={onChange} defaultChecked  checkedChildren="resume" unCheckedChildren="design" />
      </Space>
    </div>
  );
}

export default Resume;
