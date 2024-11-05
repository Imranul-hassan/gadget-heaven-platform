import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
           {/* banner  */}
            <div className="mb-40">
                <Banner></Banner>
            </div>
            

            {/* heading  */}


            {/* categories  */}
            <h3 className="text-3xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h3>
            <div className="flex flex-row gap-3 w-10/12 mx-auto">
                <div className="lg:w-[20%] bg-white h-64 ">
                    <Categories categories={categories}></Categories>
                </div>
                <div className="lg:w-[80%] ">
                    <Outlet></Outlet>
                </div>
            </div>
           
        </div>
    );
};

export default Home;