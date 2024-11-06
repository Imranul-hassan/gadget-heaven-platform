
import { TiDeleteOutline } from "react-icons/ti";
const Heart = ({product}) => {
    const { product_title, product_image, description, price} = product
    
    return (
        <div className="card bg-base-100 shadow-xl flex flex-row w-9/12 mx-auto my-3">
            <figure className="px-5 pt-5">
                <img 
                src={product_image}
                className="rounded-xl h-20 "/>
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <p className="font-bold">Price: ${price}</p>
                <button className="w-32 border py-1 px-3 rounded-full text-white bg-[#9538E2] ">Add to Card</button>
            </div>
            <p className="mt-16 text-3xl pr-12 text-red-500">  <TiDeleteOutline /></p>
        </div>
    );
};

export default Heart;