function Card({ foodType, count, setCount }) {
  function handleCount(item) {
    count = count +1
    setCount(count);

    console.log(`${count}`);
  }
  //a component <> fragment
  return (
    <>
      <h1>{foodType.name}</h1>
      <ul>
        {foodType.type.map((item, index) => (
          <li
            className="hover:text-blue-500 cursor-pointer "
            onClick={() => handleCount(item)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Card;
//if exported like this import Card from './Card.js';
//if exported like export function Button() {} import { Button } from './Button.js';
