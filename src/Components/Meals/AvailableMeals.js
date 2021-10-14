import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummy_meals = [
  {
    id: 1,
    name: "Rice",
    price: 20,
    description: "Brown rice boild",
  },
  {
    id: 2,
    name: "Gravy",
    price: 50,
    description: "Non-veg gravy made by little spicy",
  },
  {
    id: 3,
    name: "veggies Fry",
    price: 30,
    description: "All organic veggies are mixed with medium cooked",
  },
  {
    id: 4,
    name: "Butter Milk",
    price: 10,
    description: "Butter milk is directly made from curd",
  },
];

const AvailableMeals = () => {
  const availMeals = dummy_meals.map((x) => (
    <MealItem
      key={x.id}
      name={x.name}
      description={x.description}
      price={x.price}
    />
  ));

  return (
    <div>
      <Card>
        <ul>{availMeals}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
