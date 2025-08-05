import "./App.css";
import Card from "./components/card";
function App() {
  return (
    <>
    <h1>Menu</h1>
      <Card 
        foodType={{ name: "Drinks", id: 1, type: ["Tea", "Coffee", "Water"] }}//props
      />
      <Card
        foodType={{
          name: "Pizza",
          id: 2,
          type: ["Margerita", "Fungi", "Chicken"],
        }}
      />
       <Card
        foodType={{
          name: "Pasta",
          id: 3,
          type: ["Macaroni", "Spaghetti Bolognese", "Chicken parmesan"],
        }}
      />
    </>
  );
}

export default App;
