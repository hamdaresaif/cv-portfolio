
import './App.css';
import Resume from './components/Resume';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';
import { data } from './constant';

function App() {
  console.log(data)
  const urlSearchParams = new URLSearchParams(window.location.search);
  const show = urlSearchParams.get('check');
  return (
    <div className='container m-auto px-4 max-w-7xl' >
      {show?
    <Resume/> 
    : 
      <>
      <Addtodo/>
      <Todos/>
      </>
    }
    </div>
  );
}

export default App;
