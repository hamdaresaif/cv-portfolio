import React, { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Community from './Community'
import FeaturedJobs from './FeaturedJobs'
import Staffing from './Staffing'
import Program from './Progam'
import ApplyToday from './ApplyToday'
import Location from './Location'
import Callback from './Callback'

function Assesment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>

        <Header showModal={showModal}/>
        <Hero/>
        <Community/>
        <FeaturedJobs/>
        <Staffing/>
        <Program/>
        <ApplyToday/>
        <Location/>
        <Callback  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default Assesment