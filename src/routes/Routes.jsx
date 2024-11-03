import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
  ])

export default routes