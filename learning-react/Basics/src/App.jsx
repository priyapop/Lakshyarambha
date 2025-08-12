import "./App.css";
import { useState } from "react";
import Card from "./components/card";
import Form from "./components/form";
import List from "./components/arrays";
import Quiz from "./components/quiz";
import { News } from "./components/news";
import { Random } from "./components/random";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="font-serif text-xl ">Menu</h1>
      <Card
        foodType={{ name: "Drinks", id: 1, type: ["Tea", "Coffee", "Water"] }} //props
        count={count}
        setCount={setCount}
        
      />
      <Card
        foodType={{
          name: "Pizza",
          id: 2,
          type: ["Margerita", "Fungi", "Chicken"],
        }}
        count={count}
        setCount={setCount}
        
      />
      <Card
        foodType={{
          name: "Pasta",
          id: 3,
          type: ["Macaroni", "Spaghetti Bolognese", "Chicken parmesan"],
        }}
        count={count}
        setCount={setCount}
        
      /> */}
      {/* <Form /> */}
      {/* <List/> */}
        <Random/>

    </>
  );
}

export default App;
