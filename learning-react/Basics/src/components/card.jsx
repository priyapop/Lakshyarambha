const Card = ({ foodType }) => {
  //a component <> fragment
  return (
    <>
      <h1>{foodType.name}</h1>
      {/* <ul>
        <li>Tea</li>
        <li>Coffee</li>
        <li>Milk</li>
        <li>Water</li>
      </ul> */}
      <ul>
        {foodType.type.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Card;
//if exported like this import Card from './Card.js';
//if exported like export function Button() {} import { Button } from './Button.js';
