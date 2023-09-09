import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Outlet } from "react-router-dom";
import Root from './routes/root';
import './index.css'
import SignUp from './routes/signUp';
import Login from './routes/login';
import Cart from './routes/cart';
import Index from './routes';
import SearchResults from './routes/searchResults';
import { searchAction } from './components/Search';
import { GlobalProvider } from './context/GlobalContext';
import Beat from './routes/beat'
import Type from './routes/type';
import Producer from './routes/producer';
import ErrorPage from "./error-page";
import AllBeats from './routes/allBeats';
import Test from './routes/test';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/"  element={ <Root /> } loader={ async ()=> {
       
          // return fetch(` https://beats-server.onrender.com/api`)

          // return fetch(`http://192.168.0.110:8000/api`)
          
          return fetch(` http://192.168.43.159:8000/api`)
          // return fetch(` http://localhost:8000/api`)
      }}>
          <Route ></Route>
          <Route index element={<Index />}  />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/search" action={searchAction} element={ <SearchResults />} />
          {/* beats routes*/}
          <Route path="/beat" element={<Outlet />}>
            <Route path='/beat' index={true} element={<AllBeats />}/>
            <Route path="/beat/:id"  element={<Beat />} /> 
          </Route>
          {/* Types routes */}
          <Route path='/type' element={<Outlet />}>
            <Route path='/type' element={<p className='pt-16'> all types of beats </p>} />
            <Route path='/type/:tag' element={<Type />} />
          </Route>
          {/* Producer Routes */}
          <Route path='/producer' element={<Outlet />}>
            <Route path='/producer' element={<p className='pt-16'> all producers</p>} />
            <Route path='/producer/:id' element={<Producer />} />
          </Route>
          {/* All Beats */}

         <Route path="/test" element = {<Test />} />
         
   
          
      </Route>

      <Route path="/sign-up" element={ <SignUp /> } />
      <Route path="/login" element={ <Login /> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);