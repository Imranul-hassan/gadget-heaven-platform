import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";

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
                element: <Dashboard></Dashboard>
            },
            {
                path: '/product/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader: ()=> fetch('/products.json')
            }
        ]
    }
  ])

export default routes