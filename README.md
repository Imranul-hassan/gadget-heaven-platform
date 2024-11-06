
# GadgetHaven - E-commerce Platform

GadgetHaven is a e-commerce platform for gadget shopping. It includes intuitive navigation, categorized products, detailed product pages, a shopping cart, and a wishlist. Users can filter and sort items, with persistent data management via LocalStorage.

## Key Features

1. **Navigation**: Easy access to categories, cart, and wishlist via a structured navigation bar.
2. **Cart & Wishlist**: Add gadgets to a cart or wishlist (items added only once to the wishlist).
3. **Product Details**: Dedicated page with gadget info, “Add to Cart,” and wishlist options.
4. **Sort & Filter**: Filter by categories and sort cart items by descending price.
5. **Data Persistence**: Cart and wishlist are saved in LocalStorage for reload continuity.

## React Fundamentals Used

- **useLoaderData**: Fetches data before rendering a route, ensuring data is ready when the component loads.
- **React Router**: For navigating between product pages, cart, and wishlist.
- **useNavigate**: Allows programmatic navigation, such as redirecting users after certain actions.
- **useParams**: Accesses dynamic URL parameters to fetch and display specific product details.
- **useState**: For managing state such as cart and wishlist items.
- **useEffect**: For updating the cart/wishlist when the data changes.
- **LocalStorage**: Used for data persistence, ensuring cart and wishlist items remain intact upon page refresh.

[Live Link Gadget Haven](https://gadget-heaven-react.netlify.app/) 

[Requirement Document Link](/public/requirements.pdf)