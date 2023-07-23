import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../component/About/About";
import Portfolio from "../component/Portfolio/Portfolio";
import Contact from "../component/Contact/Contact";
import Coming from "../component/Coming/Coming";
import Home from "../component/Home/Home";
import Blogs from "../component/Blog/Blogs";
import AllDetails from "../component/allDetails/AllDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        
          path:'/',
          element:<Home></Home>
        },
        {
        
          path:'/home',
          element:<Home></Home>
        },
      {
    
        path:'/about',
        element:<About></About>
    },
     {
       path:'/portfolio',
       element:<Portfolio></Portfolio>
       
    },
    {
     path:'/details:id',
     element:<AllDetails></AllDetails>
    
    },

    {
      path:'/contact',
      element:<Contact></Contact>
    },
 {
  path:'/blogs',
  element:<Blogs></Blogs>,
 
},

{
  path:'/coming',
  element:<Coming></Coming>,
 
}
    ]
    },
  ]);