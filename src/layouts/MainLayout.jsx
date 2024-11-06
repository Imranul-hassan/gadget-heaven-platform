import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/* navbar  */}
            <Navbar></Navbar>

            {/* dynamic section  */}
            <div className="min-h-[calc(100vh-268px)] container mx-auto bg-slate-100">
                <Outlet></Outlet>
            </div>

            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;