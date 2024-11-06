import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-4/12 mx-auto mt-40">
            <h1 className="text-4xl ml-40">404</h1>
            <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="bg-slate-200 p-2 ml-32 rounded-full">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;