
const Card = ({product}) => {
    const {product_title, product_image, category, price} = product
    return (
        <div className="card bg-base-100 w-64 shadow-xl">
            <figure className="px-5 pt-5">
                <img
                src={product_image}
                alt="Shoes"
                className="rounded-xl w-full h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;