import { Link } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="grid grid-cols-1 gap-y-2">
            {
                categories.map(category => (
                    <Link className="bg-slate-50 p-2 text-center" key={category.category} to={`/category/${category.category}`}>{category.category}</Link>
                ))
            }
        </div>
    );
};

export default Categories;