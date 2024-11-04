
const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <h3 className="text-3xl mb-4">{title}</h3>
            <p className="text-base">{subtitle}</p>
        </div>
    );
};

export default Heading;