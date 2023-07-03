import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../component/About/About";
import Portfolio from "../component/Portfolio/Portfolio";
import Blog from "../component/Blog/Blog";
import Contact from "../component/Contact/Contact";
import Coming from "../component/Coming/Coming";
import Home from "../component/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[

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
      path:'/contact',
      element:<Contact></Contact>
    },
 {
  path:'/blog',
  element:<Blog></Blog>,
 
},

{
  path:'/coming',
  element:<Coming></Coming>,
 
}
    ]
    },
  ]);