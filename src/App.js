
import './App.css';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';
import { data } from './constant';

function App() {
  console.log(data)
  return (
    <div className='container m-auto px-4 max-w-7xl' >
      <Addtodo/>
        <Todos/>
    </div>
  );
}

export default App;
