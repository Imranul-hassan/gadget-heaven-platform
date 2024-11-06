import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

const Card = ({product}) => {
    const {product_id, product_title, product_image, category, price} = product
    return (
        <div className="card bg-base-100 w-64 shadow-xl">
            <figure className="px-5 pt-5">
                <img 
                src={product_image}
                alt="Shoes"
                className="rounded-xl w-full h-40 " />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                <Link to={`/product/${product_id}`} className="border py-2 px-3 rounded-full bg-white border-[#9538E2] text-[#9538E2]">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;