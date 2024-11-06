import { useEffect, useState } from "react";
import { getAllCarts } from "../utils";
import DashboardCart from "./DashboardCart";

const DashboardCartData = () => {
    
    const [products, setProducts] = useState([])

    const [price, setPrice] = useState(0)
    useEffect(() => {
        const totalPrice = products.reduce((sum, product) => sum + product.price,0 );
        setPrice(totalPrice);
    }, [products]);
    
    useEffect(()=>{
        const carts = getAllCarts()
        setProducts(carts)
    },[])

    const handleSort = ()=>{
        const sorted =[...products].sort((a,b) => b.price - a.price)
        setProducts(sorted)
    }

    return (
        <div>
            <div className="flex justify-between w-10/12 mx-auto my-8">
                <div className="font-bold text-lg">
                    <p>Cart</p>
                </div>
                <div className="flex gap-5">
                    <p className="font-bold text-lg">Total Cost: {price}</p>
                    <button onClick={()=>handleSort()} className="border py-1 px-3 rounded-full bg-white border-[#9538E2] text-[#9538E2]">Short By Price</button>
                    <button className="border py-1 px-3 rounded-full text-white bg-[#9538E2] ">Purchase</button>
                </div>
            </div>
            <div className="mb-10">
                        
                {
                    products.map(product => (<DashboardCart key={product.id} product={product}></DashboardCart>) )
                }
                        
            </div>
        </div>
    );
};

export default DashboardCartData;