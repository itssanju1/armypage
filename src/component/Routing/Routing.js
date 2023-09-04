import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from '../Navbaar/Navigation'
import Home from '../Navbaar/Home'
import SubmitYourRun from '../Navbaar/SubmitYourRun'
import Certificate from '../Navbaar/Certificate'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/SubmitYourRun' element={<SubmitYourRun/>}></Route>
        <Route path='/Certificate' element={<Certificate/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing