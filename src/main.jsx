import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LayoutMain from './Layouts/LayoutMain';
import LandingPage from './pages/LandingPage';
import PopUpProvider from './context/PopUpContext';
import AuthProvider from './context/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element:<LayoutMain/>,
    children:[
      {
        path: "/",
        element:<LandingPage />
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PopUpProvider>
        <RouterProvider router={router} />
      </PopUpProvider>
    </AuthProvider>
  </StrictMode>,
)
