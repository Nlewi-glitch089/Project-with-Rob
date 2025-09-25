export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className="counter-widget">
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}