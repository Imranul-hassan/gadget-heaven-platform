import { useEffect, useState } from "react";
import { getAllHearts } from "../utils";
import Heart from "./Heart";

const DashboardHeart = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const carts = getAllHearts()
        setProducts(carts)
    },[])
    return (
        <div className="">
            <div className="flex justify-between w-9/12 mx-auto my-8">
                <div className="font-bold text-lg">
                    <p>Wishlist</p>
                </div>
            </div>
            <div className="mb-10">
                        
                {
                    products.map(product => (<Heart key={product.id} product={product}></Heart>) )
                }
                        
            </div>
        </div>
    );
};

export default DashboardHeart;