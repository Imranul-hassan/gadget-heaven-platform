import { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../utils";
import DashboardCart from "./DashboardCart";
import { useNavigate } from "react-router-dom";

const DashboardCartData = () => {
    
    const navigate = useNavigate();
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

    const deleteData =()=>{
        removeCart();
        const carts = getAllCarts()
        setProducts(carts)
        document.getElementById('my_modal_1').showModal()
    }

    const handleSort = ()=>{
        const sorted =[...products].sort((a,b) => b.price - a.price)
        setProducts(sorted)
    }

    const handleClose = () => {
        navigate('/'); 
      };

    return (
        <div>
            <div className="flex justify-between w-10/12 mx-auto my-8">
                <div className="font-bold text-lg">
                    <p>Cart</p>
                </div>
                <div className="flex gap-5">
                    <p className="font-bold text-lg">Total Cost: {price}</p>
                    <button onClick={()=>handleSort()} className="border py-1 px-3 rounded-full bg-white border-[#9538E2] text-[#9538E2]">Short By Price</button>
                    <button onClick={deleteData} className="border py-1 px-3 rounded-full text-white bg-[#9538E2] ">Purchase</button>
                </div>
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="w-8/12 mx-auto">
                        <h3 className="font-bold text-lg mb-3">Payment Successfully</h3>
                        <hr />
                        <p className="py-3">Thanks for purchasing</p>
                        <p >Total : {price}</p>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                       <button onClick={handleClose} className="btn">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
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