
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const allProduct = useLoaderData()
    console.log(allProduct)
    const { product_id } = useParams()
    console.log(product_id)
    const [product, setProduct] = useState({})
    console.log(product)

    useEffect(() =>{
        const singleData =allProduct.find((item => item.product_id === parseInt(product_id)))
        setProduct(singleData)
    },[allProduct, product_id])

    return (
        <div className="w-8/12 flex mx-auto bg-white p-8 gap-8 ">
          <div>
                <img src={product.product_image} alt="" />
          </div>
          <div className="">
                <h2 className="text-2xl my-2 font-bold">{product.product_title}</h2>
                <p>Price: {product.price}</p>
                <p>{product.description}</p>
                <p>{product.Specification}</p>
                <div>
                    <h2 className="font-bold">Rating</h2>
                    <p>{product.rating}</p>
                </div>
                <div>
                    <button className="bg-[#9538E2] p-2 rounded-md text-white">Add to Cart</button>
                </div>
          </div>
          
        </div>
    );
};

export default ProductDetails;