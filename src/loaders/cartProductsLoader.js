import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch("products.json");
    const products = await loadedProducts.json();

    // if cart data is in database, We have to use async function

    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find((p) => p.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
    // if I need to return two things
    // return [savedCart, products];
};
export default cartProductsLoader;
