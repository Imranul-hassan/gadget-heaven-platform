import Heading from "../components/Heading";

const Dashboard = () => {
    return (
        <div>
           <div className="bg-[#9538E2] flex flex-col items-center">
                <Heading title={"Dashboard"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Heading>
                <div className="my-4 text-white font-bold ">
                    <button className="border py-2 px-5 rounded-lg mr-4">Cart</button>
                    <button className="border p-2 rounded-lg">Wishlist</button>
                </div>
           </div>
           <div>

           </div>
        </div>
    );
};

export default Dashboard;