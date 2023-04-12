import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Man from './Components/Man/Man';
import Home from './Components/Layout/Home';
import Catagory from './Components/Catagory/Catagory';
import Blog from './Components/Blog/Blog';
import AppliedJob from './Components/AlliedJobs/AppliedJob';
import Gogle from './Page/Gogle/Gogle';
import Netflix from './Page/Netflix/Netflix';
import Apple from './Page/Apple/Apple';
import Microsoft from './Page/Microsoft/Microsoft';
import Error from './Components/Error/Error';




const router = createBrowserRouter([
 {
  path:'/',
  element:<Home></Home>,
  children:[
    {
      path:'/',
      element:<App></App>
    },
    {
      path:'applaction',
      element:<AppliedJob></AppliedJob>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    },
    {
      path:'gogle',
      element:<Gogle></Gogle>
    },
    {
      path:'netflix',
      element:<Netflix></Netflix>
    },
    {
      path:'apple',
      element:<Apple></Apple>
    },
    {
      path:'microsoft',
      element:<Microsoft></Microsoft>
    },
    {
      path:'*',
      element:<Error></Error>
    }
    
  ]
 }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
