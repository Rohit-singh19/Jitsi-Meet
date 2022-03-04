import { Route, Routes } from 'react-router-dom';
import './App.css';
import EndCall from './Components/EndCall';
import Home from './Components/Home';
import Video from './Components/Video';

function App() {
  const value = window.sessionStorage.getItem("roomName");
  return (
    <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/oncall' element={<Video />} />

        <Route path='/endcall' element={<EndCall />} />
        
    </Routes>
  );
}

export default App;