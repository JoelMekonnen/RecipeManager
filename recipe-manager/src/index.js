import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import RecipeDetail from './Pages/recipeDetail';
import './index.css'
import Login from './Pages/Login';
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RecipeManager() {
       return(
            <BrowserRouter>
                  <Routes>
                     <Route index element={<Homepage/>} />
                     <Route path="/Login" element={<Login/>}/>
                     <Route path="/About" element={<About/>}/>
                     <Route path="/Contact" element={<Contact/>}/>
                     <Route path='/recipeDetail' element={<RecipeDetail/>}/>
                  </Routes>
            </BrowserRouter>
       );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeManager />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
