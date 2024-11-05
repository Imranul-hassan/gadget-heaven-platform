
const Footer = () => {
    return (
        <div>

                <footer className="footer bg-[#FFFFFF] text-base-content justify-center px-10 py-5 ">
                    <div >
                    <p className="text-3xl font-bold pl-16 ">
                    Gadget Heaven
                    </p>
                    <p> Leading the way in cutting-edge technology and innovation.</p>
                    </div>
                </footer>
                <hr />

               <footer className="footer bg-[#FFFFFF] text-base-content items-center gap-40 w-7/12 mx-auto py-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    {/* <a className="link link-hover">Returns</a> */}
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                   
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                
            </footer>

        </div>
    );
};

export default Footer;