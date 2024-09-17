import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import Mobile from './Mobile';
import UseState from './Usestate';
import Usereducer from './Usereducer';
import A from './A';
import Bmicalculator from './Bmicalculator';
import Expensetracker from './Expensetracker';

const ReactRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/"element={<Home/>}>  </Route>
        <Route path="/props"element={<Mobile/>}>  </Route>
        <Route path="/usestate"element={<UseState/>}>  </Route>
        <Route path="/usereducer"element={<Usereducer/>}></Route>
        <Route path="/contextapi"element={<A/>}></Route>
        <Route path="/bmicalculator"element={<Bmicalculator/>}></Route>
        <Route path="/expensetracker"element={<Expensetracker/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter
