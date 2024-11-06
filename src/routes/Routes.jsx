import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import DashboardCartData from "../components/DashboardCartData";
import DashboardHeart from "../components/DashboardHeart";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('/categories.json'),
                children: [
                    {
                        path: '/',
                        element: <ProductCards></ProductCards>,
                        loader: ()=> fetch('/products.json')
                    },
                   {
                        path: '/category/:category',
                        element: <ProductCards></ProductCards>,
                        loader: ()=> fetch('/products.json')
                   }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/cart',
                        element: <DashboardCartData></DashboardCartData>
                    },
                    {
                        path: '/dashboard/heart',
                        element: <DashboardHeart></DashboardHeart>
                    }
                ]
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/product/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader: ()=> fetch('/products.json')
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
  ])

export default routes