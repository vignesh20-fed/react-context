import React, { useReducer } from 'react'
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Home from '../home/home.js'
import Login from '../login/login';
import Form from '../form/form';
import { stateContext } from '../context/statecontext.js';
import { initialState, stateReducer } from '../reducer/reducer.js';

const Routing = () => {
 const [state , dispatch]=useReducer(stateReducer,initialState)
  return <stateContext.Provider value={{state,dispatch}}>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
  </BrowserRouter> 
      </stateContext.Provider>
}
export default Routing