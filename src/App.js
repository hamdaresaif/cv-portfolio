
import './App.css';
import Assesment from './assesmentComponents/Assesment';
import Resume from './components/Resume';
import { data } from './constant';
import { useState } from 'react';

function App() {
  console.log(data)
  const [design, setDesign] = useState(false);
  const onChange = () => {
    setDesign(!design);
  };
  return (
    <>
    <div className="text-center  bg-slate-200 no-print mx-auto  ">
    <div className="  ">

   <h2>Unleash Developer Magic! Click to Witness.</h2>
      <button onClick={onChange} className="bg-slate-300 rounded-md  w-20  " >{design?"Portfolio":"Resume"}</button>
    </div>
    </div>
    <div className='bg-slate-100 py-5 '> 
    <div className='container m-auto px-4 max-w-7xl' >
    <Resume  design={design} />
    </div>
    </div>
    {/* <div className='relative'>

    <Assesment className=""/>
    </div> */}
    </>
  );
}

export default App;
