import "./MealItem.css";

const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <div>
      <div className='mealItem'>
        <h3>{props.name}</h3>
        <span className='description'>{props.description}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='divider'>{/* <hr /> */}</div>
    </div>
  );
};

export default MealItem;
