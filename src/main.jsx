import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-[#0b041e]'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
