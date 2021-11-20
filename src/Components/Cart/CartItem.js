import "./CartItem.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className='cart_item'>
      <div>
        <h2>{props.name}</h2>
        <div className='item_summary'>
          <span className='price'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={props.onRemove} className='remove'>
          -
        </button>
        <button onClick={props.onAdd} className='add'>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
