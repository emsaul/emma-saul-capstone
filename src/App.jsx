import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Compliments from './pages/ComplimentsPage/ComplimentsPage';
import TheVoid from './pages/TheVoidPage/TheVoidPage';
import Card from './components/Card/Card';
import MainBackground from './components/MainBackground/MainBackground';
import Title from './components/Title/Title';
import Buttons from './components/Buttons/Buttons';
import CornerMiku from './components/CornerMiku/CornerMiku';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainBackground>
          <Title />
          <Card>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compliments" element={<Compliments />} />
              <Route path="/thevoid" element={<TheVoid />} />
            </Routes>
          </Card>
          <Buttons />
          <CornerMiku />
        </MainBackground>
      </BrowserRouter>
    </>
  )
}

export default App;