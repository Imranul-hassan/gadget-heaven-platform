import Heading from "../components/Heading";

const About = () => {
    return (
        <div className="pb-10">
            <div className="bg-[#9538E2] p-7">
                
                <Heading title={"Gadget Heaven"} subtitle={"GadgetHaven is a e-commerce site for gadget shopping, featuring intuitive navigation, categorized products, detailed product pages, a shopping cart, and a wishlist. Users can filter, sort items and enjoy persistent data management with  LocalStorage."}></Heading>
            </div>
            
               
               <div className="w-8/12 mx-auto">
                    <div className="collapse collapse-arrow bg-white my-3">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How is data managed?</div>
                        <div className="collapse-content">
                        <p>LocalStorage keeps cart and wishlist data even on reload.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">What happens to my cart and wishlist if I refresh the page?</div>
                        <div className="collapse-content">
                        <p>Your cart and wishlist are saved with LocalStorage, so they remain even after refreshing or revisiting the site.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white my-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How are product details displayed?</div>
                        <div className="collapse-content">
                        <p>Each product page shows the item’s image, price, description, and buttons to add it to the cart or wishlist.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Are the cart and wishlist easy to access?</div>
                        <div className="collapse-content">
                        <p>Yes, both the cart and wishlist are accessible via the navigation bar, making it easy to view your saved items.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white my-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How does the “Sort by Price” feature work in the cart?</div>
                        <div className="collapse-content">
                        <p>Clicking “Sort by Price” arranges items in descending order, displaying the most expensive items first.</p>
                        </div>
                    </div>
               </div>
        </div>
    );
};

export default About;