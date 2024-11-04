
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const data = useLoaderData()
    const { product_id } = useParams()
    const [product, setProduct] = useState({})
    console.log(product)

    useEffect(() =>{
        const singleData = data.find(item => item.product_id == product_id)
        setProduct(singleData)
    },[data, product_id])

    return (
        <div>
          <h3 className="text-black">{product.category}</h3>
          
        </div>
    );
};

export default ProductDetails;