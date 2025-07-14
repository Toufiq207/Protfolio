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
import SkillsPage from './pages/SkillsPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';





const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  
   <Route
      path="/"
      element={<Home />}>
      </Route>
{/*    
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
      element={<SkillsPage />}>
      </Route>
   <Route
      path="/service"
      element={<ServicePage />}>
      </Route>
   <Route
      path="/contact"
      element={<ContactPage />}>
      </Route>
   
    */}
   
      </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
   
  )
}

export default App
