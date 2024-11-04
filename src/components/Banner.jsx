import banner from "../assets/banner.jpg"
const Banner = () => {
    return (
        <div className="hero bg-[#9538E2] text-white relative mb-80 ">
            <div className="hero-content text-center">
                <div className="w-9/12 mb-28">
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 w-8/12 mx-auto">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-[#FFFFFF] rounded-lg">Shop Now</button>
                </div>
            </div>
            <div className="w-5/12  mx-auto absolute  top-72 rounded-lg ">
                    <img className=" rounded-lg p-3 border " src={banner} alt="" />
                    {/* w-[600px] h-[300px]  */}
            </div>
        </div>
    );
};

export default Banner;