
const Heading = ({title, subtitle}) => {
    return (
        <div className=" w-7/12 mx-auto flex flex-col justify-center items-center  text-[#FFFFFF] ">
            <h3 className="text-3xl mb-4 font-bold">{title}</h3>
            <p className="text-center ">{subtitle}</p>
        </div>
    );
};

export default Heading;