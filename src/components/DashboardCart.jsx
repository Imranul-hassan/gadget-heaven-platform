import { TiDeleteOutline } from "react-icons/ti";

const DashboardCart = ({product}) => {
    const { product_title, product_image, description, price} = product
    
    return (
        <div className="card bg-base-100 shadow-xl flex flex-row w-10/12 mx-auto my-4">
            
                <figure className="px-5 pt-5">
                    <img 
                    src={product_image}
                    className="rounded-xl h-20 " />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-bold">Price: ${price}</p>
                </div>
              <p className="mt-16 text-3xl text-red-500 pr-12">  <TiDeleteOutline /></p>
            </div>

        
    );
};

export default DashboardCart;