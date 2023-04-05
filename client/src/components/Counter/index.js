import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setStep } from "../../store/counterSlice";

function Counter() {
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleStep = ({ target: { value } }) => dispatch(setStep({ value }));
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <p>
        step: <input type="number" value={step} onChange={handleStep} />
      </p>
    </div>
  );
}

export default Counter;