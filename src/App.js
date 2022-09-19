
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tasklist from './components/tasklist';
import TodoAdd from './components/add task';
import {Routes,Route} from 'react-router-dom'
import EditTask from './components/edittask';
import NBAR from './NBAR';

function App() {
  return (
    <div className="App">
      <TodoAdd/>
      <NBAR />
      <Routes>
        <Route path="/tasks" element={<Tasklist />}/>
        <Route path="/tasks/:id" element={<EditTask/> }/>
        <Route path="/done" element={<Tasklist />}/>
        <Route path="/undone" element={<Tasklist />}/>
      </Routes>
      <Tasklist />
    </div>
  );
}

export default App;