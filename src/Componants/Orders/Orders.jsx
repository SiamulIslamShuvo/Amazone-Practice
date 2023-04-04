import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../reviewItem/ReviewItem";
import "./Orders.css";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter((product) => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    };
    return (
        <div className="shop-container">
            <div className="review-container">
                {cart.map((product) => (
                    <ReviewItem
                        handleRemoveFromCart={handleRemoveFromCart}
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;
