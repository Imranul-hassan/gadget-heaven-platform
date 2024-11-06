import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { addCart, getAllCarts } from "../utils";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const carts = getAllCarts()
        setProducts(carts)
    },[])

    // const handleAddedCart= (product)=>{
    //     addCart(product)
       
    // }
    
    return (
        <div>
           <div className="bg-[#9538E2] flex flex-col items-center">
                <Heading title={"Dashboard"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Heading>
                <div className="my-4 text-white font-bold ">
                    <NavLink to='/dashboard/cart'><button className="border py-2 px-5 rounded-lg mr-4">Cart</button></NavLink>
                    <NavLink to='/dashboard/heart'> <button className="border p-2 rounded-lg">Wishlist</button></NavLink>
                </div>
           </div>
           <div className="p-10">
              <Outlet>
                   
              </Outlet>
           </div>
        </div>
    );
};

export default Dashboard;