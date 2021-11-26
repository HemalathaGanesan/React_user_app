import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import "../UI/Modal";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [isOrder, setIsOrder] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className='cart_items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsOrder(true);
  };
  const submitHandler = async (userData) => {
    const response = await fetch(
      "https://reactproject-6f524-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx,
        }),
      }
    );
    const data = response.json();
    console.log(data);
    setSubmitResponse(true);
    cartCtx.clearCart();
  };

  const cartModalItems = (
    <React.Fragment>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrder && (
        <CheckoutForm onConfirm={submitHandler} close={props.onHideCart} />
      )}
      {!isOrder && (
        <div className='actions'>
          <button className='button_alt' onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && (
            <button className='button' onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const submitModal = (
    <div>
      <p>Successfully sent the order.</p>
      <div className='actions'>
        <button className='button' onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </div>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {!submitResponse && cartModalItems}
      {submitResponse && submitModal}
    </Modal>
  );
};

export default Cart;
