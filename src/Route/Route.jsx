import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/doctorProfile',
          element: <DoctorProfile></DoctorProfile>
        }
      ]
    },
  ]);