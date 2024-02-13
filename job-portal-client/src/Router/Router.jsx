import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import PostJob from "../Pages/PostJob";
import MyJob from "../Pages/MyJob";
import SalaryEst from "../Pages/SalaryEst";
import UpdateJob from "../Pages/UpdateJOb";
import Login from "../components/Login";
import JobDetails from "../Pages/jobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {path:'/',element: <Home/>},
        {path:'/post-job',element: <PostJob/>},
        {path:'/my-job',element: <MyJob/>},
        {path:'/salary',element: <SalaryEst/>},
        {
          path:'/edit-job/:id',
          element: <UpdateJob/>,
          loader : ({params})=> fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
        {path:'/job/:id',element: <JobDetails/>},
      ]  
    },
    {path:'/login',element: <Login/>}
  ]);

  export default router