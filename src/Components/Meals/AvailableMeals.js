import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://reactproject-6f524-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) throw new Error("something went wrong");

      const data = await response.json();
      console.log(data);

      let mealsList = [];
      for (const key in data) {
        mealsList.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(mealsList);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  if (isLoading)
    return (
      <section style={{ color: "white", textAlign: "center" }}>
        <p>Loading....</p>
      </section>
    );

  if (error)
    return (
      <section style={{ color: "red", textAlign: "center" }}>
        <p>{error}</p>
      </section>
    );

  const availMeals = meals.map((x) => (
    <MealItem
      key={x.id}
      id={x.id}
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
