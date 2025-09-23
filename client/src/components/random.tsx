import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { random } from "../store/slice/randomSide";

export default function Random() {
  const dispatch = useDispatch();

  const randomList = useSelector((state) => state.random.value);

  const handleClick = () => {
    dispatch(random());
  };
  console.log(randomList);
  return (
    <div>
      <h1>Random list:</h1>
      <button onClick={handleClick}>Random number</button>
      <ul className="random-list">
        [
        {randomList.map((num: number, index: number) => (
          <span key={index}>,{num}</span>
        ))}
        ]
      </ul>
    </div>
  );
}
