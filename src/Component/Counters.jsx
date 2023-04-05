
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment,reset } from "../Redux/Slice/counterSlice";
import { decrement1, increment1,reset1 } from "../Redux/Slice/counterSlice1";
import { decrement2, increment2,reset2 } from "../Redux/Slice/counterSlice2";
export default function Counters(props) {
  const count =useSelector(state=>state.counter.count)
const count1 =useSelector(state=>state.counter1.count1)
const count2 =useSelector(state=>state.counter2.count2)

const dispach=useDispatch()
let value=0;
if(props.value===0)
value=count
else if(props.value===1)
value=count1
else
value=count2
  return (
    <div style={{textAlign:'center'}}>
    <button onClick={()=>{
        if(props.value===0)
        dispach(increment())
        else if (props.value===1)
        dispach(increment1())
        else
        dispach(increment2())
    }
        }>
      Increment
    </button>
    <h2>{value}</h2>
 
 <button onClick={(e)=>{
    if(props.value===0)
    dispach(decrement())
    else if (props.value===1)
    dispach(decrement1())
    else
    dispach(decrement2())
 }}>
  Decrement 
  </button>  
<br></br>
<button style={{marginTop:"10px"}} onClick={()=>{
 if(props.value===0)
 dispach(reset())
 else if (props.value===1)
 dispach(reset1())
 else
 dispach(reset2())

}}>
  Reset
</button>
   </div>
  ); 
}
