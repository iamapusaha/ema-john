import { getShoppingCart } from "../../utilities/fakedb";

const cratProductsLoader = async () => {
    const lodedProducts = await fetch('products.json');
    const products = await lodedProducts.json();
    // if cart is in database, you have to use async await
    const storedCart = getShoppingCart()
    const savedCart = [];
    console.log(storedCart);
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    // if you need to send two things
    // return [products, savedCart]
    //another option
    // return { products, cart: savedCart }
    return savedCart;

}

export default cratProductsLoader;