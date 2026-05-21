import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import CandleLight from './pages/CandleLight';
import Surprise from './pages/Surprise';
import HappyBirthday from './pages/HappyBirthday';
import ToluBirthday from './pages/ToluBirthday';
import BirthdayVideo from './pages/BirthdayVideo';
import BirthdayBanner from './pages/Banner';

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <BrowserRouter>
      <Routes>          
        <Route 
          path='/'
          element={<BirthdayBanner />}
        />
        <Route 
          path='/surprise'
          element={<Surprise />}
        />
        <Route 
          path='/candle-lighter'
          element={<CandleLight />}
        />
        <Route 
          path='/happy-birthday'
          element={<HappyBirthday />}
        />
        <Route 
          path='/tolu-birthday'
          element={<ToluBirthday />}
        />
        <Route 
          path='/birthday-video'
          element={<BirthdayVideo />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
