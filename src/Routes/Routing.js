import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainApp from '../Components/MainApp';
import MusicPlayerSlider from '../Components/dummy';

export const Routing=()=>{

    return(
        <>
         <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainApp} />
        </Routes>
      </BrowserRouter>
        </>
    );
}