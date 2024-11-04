import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {

    const data =useLoaderData()
    const {category} = useParams()
    const [products, serProducts] = useState([])
    useEffect(()=>{
        if(category){
            const filteredByCategory =[...data].filter(product => product.category === category)
            serProducts(filteredByCategory)
        }
        else{
            serProducts(data)
        }
    },[data, category])
    
    return (
        <div className="grid grid-cols-3 gap-3 mb-10">
            {
                products.map(product => (<Card key={product.id} product={product}></Card>) )
            }
            
        </div>
    );
};

export default ProductCards;