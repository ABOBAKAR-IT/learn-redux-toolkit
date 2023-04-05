
import Counters from "./Component/Counters";

export default function App() {

  return (
    <div style={{textAlign:'center'}}>
  <Counters value={0} />
  <hr>
  </hr>
  <Counters value={1}/>
  <hr></hr>
  <Counters Value={2}/>
   </div>
  ); 
}
