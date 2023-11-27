import React, { useState } from 'react'
import search from '../assets/search.png'
import logo from '../assets/logo.svg'
import { Collapse, Dropdown, Space } from 'antd'
import { CloseOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons'
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      temp Jobs
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
      permanent jobs
      </a>
    ),
    disabled: false,
  },

];

function Header(props) {
  const {showModal}= props
  const [showMenu,setShowMenu]=useState(false)
  return (
    <div className='cursor-pointer'>
        <div className="header-top bg-[#1f3547] p-3   ">
            
       <div className="w-[95%] m-auto md:grid md:grid-cols-6 ">
       <div className="bg-[#4C5D6C] rounded-md p-1 px-3 col-start-1 col-end-3 flex  ">
                <p className='text-white  text-sm md:text-base'>LG Resources offers Customized Staffing - </p>
                <a className='text-white   text-sm md:text-base   underline ' href="#" rel='noopener'> Get Started Now</a>
            </div>
            <div className="flex justify-between col-end-8 col-span-2 items-center ">
                <p className='text-white text-sm  ' >Privacy Policy</p>
                <p className='text-white text-sm  ' >Contact</p>
                <img width="25"  src={search} alt="search--v1"/>
            </div>
       </div>
        </div>

        <div className="bg-white flex justify-between items-center p-4 md:p-8 w-[95%] m-auto ">
          <div className="logo-container w-40 md:w-auto  ">
            <img src={logo} alt="" />
          </div>
          <div className="">

            <ul className=' gap-10 hidden md:flex'>
              <li>Work for LG</li>
              <li>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  Jobs
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              </li>
              <li>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  Location
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              </li>
              <li>Blog</li>
            </ul>
          
          </div>
          <div className="flex gap-4">
          <div onClick={()=>setShowMenu(!showMenu)} className=" flex justify-between items-center px-2 md:hidden">
            {showMenu? <CloseOutlined className='text-xl md:text-3xl'/>:<MenuOutlined className='text-xl md:text-3xl'  />}
            </div>
            <button onClick={showModal} className='bg-[#ef7123] rounded-lg text-white text-xs md:text-base px-2 md:px-5 py-1 hover:bg-[]'>Apply for a job</button>
          </div>
        </div>
        <div className={` ${showMenu?'block bg-white':'hidden'} md:hidden `}>
          <ul>

            <li className='p-4 border-slate-950 border-y-2 text-sm'>Work for LG</li>
            <Collapse className=' border-t-2 border-slate-950'  expandIconPosition='end' ghost  >
            <Collapse.Panel  header="Jobs" key="1">
              <p className='p-4'>Temp Jobs</p>
              <p className='p-4'>Permanent Jobs</p>
            </Collapse.Panel>
              </Collapse>
            <Collapse className='border-slate-950 border-y-2'  expandIconPosition='end' ghost  >
            <Collapse.Panel className='border-slate-950 border-y-2' header="Locations" >
              <p className='p-4 '>Temp Jobs</p>
              <p className='p-4'>Permanent Jobs</p>
            </Collapse.Panel>
              </Collapse>
            <li className='p-4 border-slate-950 border-t-2 text-sm'>Blog</li>
          </ul>
        </div>
    </div>
  )
}

export default Header