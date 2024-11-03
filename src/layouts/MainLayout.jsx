import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* navbar  */}
            <Navbar></Navbar>

            {/* dynamic section  */}
            <div className="">
            {/* max-h-[calc(100vh-240px)] */}
                <Outlet></Outlet>
            </div>

            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;