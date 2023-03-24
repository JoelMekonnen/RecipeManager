import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import RecipeDetail from './Pages/recipeDetail';
import './index.css'
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminHome from './Pages/Admin/AdminHome';
import CreateRecipePage from './Pages/Admin/CreateRecipePage';
import ListRecipesPage from './Pages/Admin/ListRecipesPage';
import CreateCompany from './Pages/Admin/CreateCompany';
import ListIngredient from './Pages/Admin/ListIngredient';
import CreateIngredient from './Pages/Admin/CreateIngredient';
import UpdateIngredient from './Pages/Admin/UpdateIngredient';
import RecipesDetailPage from './Pages/Admin/RecipeDetail';
import  { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './utils/protectedRoutes';

export default function RecipeManager() {
       let checkLoggedIn =  localStorage.getItem("loggedIn")
      //  console.log(checkLoggedIn)
       return(
            <BrowserRouter>
                  <Routes>
                     <Route index element={<Homepage/>} />
                     <Route element={<ProtectedRoute/>}>
                        <Route path="/Admin/Home" element={<AdminHome/>}/>
                        <Route path="/Admin/Recipe/Create" element={ <CreateRecipePage/> }/>
                        <Route path="/Admin/Recipe/List" element={ <ListRecipesPage/>}/>
                        <Route path="/Admin/ingredient/List" element={<ListIngredient/>}/>
                        <Route path="/Admin/Recipe/:id/Detail" element={<RecipesDetailPage/>}/>
                        {/* <Route path="/Admin/ingredient/:id/update" element={<UpdateIngredient/>}/> */}
                     </Route>
                     <Route  path="/Admin/Company/Register" element={<CreateCompany/>}/>
                     <Route path="/Contact" element={<Contact/>}/>
                     <Route path='/recipeDetail' element={<RecipeDetail/>}/>
                     <Route path='/Register' element={<Register/>}/>
                     <Route path="/Login" element={<Login/>}/>
                     <Route path="/About" element={<About/>}/>
                     

                  </Routes>
            </BrowserRouter>
       );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RecipeManager />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

