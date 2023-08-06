import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './File_component/Home'
import About from './File_component/About'
import ProjectWork from './File_component/ProjectWork';
import Technology from './File_component/Technology';
import Contect from './File_component/Contect';
import Nevbar from './Component/Nevbar';

function App() {
  return (
    <div> 
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/ProjectWork' element={<ProjectWork />}></Route>
      <Route path='/Technology' element={<Technology />}></Route>
      <Route path='/Contect' element={<Contect />}></Route>
    </Routes>
    </div>
  );
}

export default App;
