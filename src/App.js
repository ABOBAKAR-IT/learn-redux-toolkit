
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment,reset } from "./Redux/Slice/counterSlice";
export default function App() {
  const count =useSelector(state=>state.counter.count)
const dispach=useDispatch()
  return (
    <div style={{textAlign:'center'}}>
    <button onClick={(e)=>{dispach(increment())}}>
      Increment
    </button>
   <h2>{count}</h2>
 
 <button onClick={(e)=>{dispach(decrement())}}>
  Decrement 
  </button>  
<br></br>
<button style={{marginTop:"10px"}} onClick={()=>dispach(reset())}>
  Reset
</button>
   </div>
  ); 
}
