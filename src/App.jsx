import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import Expreance from './layout/Expreance';
import RootPage from './pages/RootPage';





const router = createBrowserRouter(
  createRoutesFromElements(
    

   <Route
      path="/"
      element={<RootPage/>}>
        
   <Route
      path="/"
      element={<Home />}>
      </Route>
   
   <Route
      path="/about"
      element={<AboutPage />}>
      </Route>
   
   <Route
      path="/projects"
      element={<ProjectPage />}>
      </Route>
   
   <Route
      path="/skills"
      element={<Expreance />}>
      </Route>
   <Route
      path="/service"
      element={<ServicePage />}>
      </Route>
   <Route
      path="/contact"
      element={<ContactPage />}>
      </Route>
   
   
      </Route>
    
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
   
  )
}

export default App
