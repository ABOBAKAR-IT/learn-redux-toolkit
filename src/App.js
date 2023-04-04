import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/Slice/CountSlice";
export default function App() {
  const count = useSelector((state) => state.count.value);
  const dispach = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button onClick={() => dispach(increment())}>increment</button>
        <h2>{count}</h2>
        <button onClick={() => dispach(decrement())}>decrement</button>
      </div>
    </div>
  );
}
