
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { CiHeart } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";
import { addCart, addHeart, getAllCarts, getAllHearts } from "../utils";

const ProductDetails = () => {
    const allProduct = useLoaderData()
    const { product_id } = useParams()
    const [isHeart, setIsHeart] = useState(false)
    const [product, setProduct] = useState({})
   
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    useEffect(() =>{
        const singleData =allProduct.find((item => item.product_id === parseInt(product_id)))
        setProduct(singleData)
        const hearts = getAllHearts()
        const isExist = hearts.find(item=> item.product_id == singleData.product_id)
        if(isExist){
            setIsHeart(true)
        }

    },[allProduct, product_id])
    
    const { Specification, description, product_title, product_image, category, price} = product

    const handleCart= (product)=>{
        addCart(product)
       
    }

    const handleHeart=(product)=>{
        addHeart(product)

    }

    return (
        <div className=" relative h-[550px] ">
            <div className="h-52 bg-[#9538E2] ">
                <Heading title={"Product Details"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Heading>
            </div>

            <div className="w-8/12 flex mx-auto bg-white p-8 gap-8 absolute top-32 ml-44">
                <div className="">
                        <img className="w-full h-80" src={product.product_image} alt="" />
                </div>
                <div className="">
                        <h2 className="text-2xl my-2 font-bold">{product.product_title}</h2>
                        <p className="font-bold">Price:$ {product.price}</p>
                        <button className="bg-[#309C081A] py-1 px-3 mt-2 rounded-full">In Stock</button>
                        <p className="my-2">{description}</p>
                        {/* <div>
                            <ul>
                                { 
                                    Specification.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))
                                }
                            </ul>
                        </div> */}

                        <div className="my-3">
                            <h2 className="font-bold">Rating</h2>
                            <div className="flex gap-3">
                                <div>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div className="mt-1 border p-1 rounded-lg">
                                    {product.rating}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=> handleCart(product)} className="bg-[#9538E2] p-2 rounded-md text-white">
                                Add to Cart
                            </button>
                            <button disabled={isHeart} onClick={()=> handleHeart(product)} 
                                className="border rounded-full p-2 ml-4 bg-slate-200">
                            <CiHeart /></button>
                        </div>
                </div>
            </div>
          
        </div>
    );
};

export default ProductDetails;