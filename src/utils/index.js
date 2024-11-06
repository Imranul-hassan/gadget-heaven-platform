import js from "@eslint/js"
import toast from "react-hot-toast"

//get all products from local storage
const getAllCarts = ()=>{
    const all = localStorage.getItem('carts')
    if(all){
        const carts =JSON.parse(all)
        return carts
    }
    else{
        return []
    }
}

//get all hearts from local storage

const getAllHearts=()=>{
    const all = localStorage.getItem('hearts')
    if(all){
        const hearts = JSON.parse(all)
        return hearts
    }
    else{
        return []
    }
}

//add a product to local storage
const addCart = product =>{
    const carts = getAllCarts()
    // const isExist = carts.find(item => item.id == product.id)

    carts.push(product)
    localStorage.setItem('carts', JSON.stringify(carts))
    toast.success('Successfully added product!');

}

// add a heart to local storage
const addHeart = product=>{
    const hearts = getAllHearts()

    const isExist = hearts.find(item=> item.product_id == product.product_id)
    console.log(product.product_id)
    if(isExist) {
        return toast.error('Already added wishlist!');
    } 

    hearts.push(product)
    localStorage.setItem('hearts', JSON.stringify(hearts))
    toast.success('Successfully added wishlist!');
}






export {addCart, getAllCarts, addHeart, getAllHearts}