import {useContext ,  useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import { stateContext } from '../context/statecontext';
import './form.css'

// localStorage.setItem("edit",JSON.stringify([]))
let tasks =[];
const Form = () => {
  const {state , dispatch}= useContext(stateContext)
  console.log(state)
    //  let con = JSON.parse(localStorage.getItem("edit"));
    // console.log(con);
    // const [firstInp, setFirstInp] = useState(con ?.length ?JSON.parse(localStorage.getItem("edit"))[0].name :"");
    // const [secondInp, setSecondInp] = useState(con ?.length ?JSON.parse(localStorage.getItem("edit"))[0].name2 :"");
    const [firstInp, setFirstInp] = useState(state.edit ? state.edit[0] ?.name : "");
    const [secondInp, setSecondInp] = useState(state.edit ? state.edit[0] ?.name2 :"")
    const [inputEmpty, setInputEmpty] = useState(false);
    const [checkInput, CheckEmpty] = useState(false);
   
 
    const sameInput = (e) => {
       if(e.target.name === "name"){
          setFirstInp(e.target.value);
       }
       else{
          setSecondInp(e.target.value);
       }
    }

    const checked =() =>{
        CheckEmpty(!checkInput)
    }
    
    const submitHandle = (e) => {
       e.preventDefault();
       
      //  localStorage.removeItem("edit");
       setInputEmpty(true);
    
      let vi={
        name:firstInp,
        name2:secondInp,
        Complete:checkInput,
            };
      if(state.edit ?.length > 0){
        tasks[state.edit[1]]=vi
        dispatch({
          type:"EDIT",
          payload:[],
        })
      }
      else{
        tasks.push(vi);
      }

    // if(con?.length >0){
    //   tasks[con[1]]=vi;
    // }
    // else{
    // tasks.push(vi);
    // }
    // localStorage.setItem("formdetails",JSON.stringify(tasks))
   
    }
  return (
    <div>
    <h1>Form</h1>
   <div class="row">
   <div class="col">
      <div class="logincontent">
            <form  id="function" onSubmit={submitHandle}>
                    <input name='name' placeholder='username'  value={firstInp} onChange={sameInput}></input>
                      {firstInp === "" && inputEmpty && <div  class="loginpara">Please Fill the first box</div>}
                    <input placeholder="password" value={secondInp} passinp ="pass" onChange={sameInput}></input>
                      {secondInp === "" && inputEmpty && <div  class="loginpara">Please Fill the second box</div>}
                    <input checked ={checkInput} onChange={checked} type="checkbox"></input>
                    <button class="btn"onClick={()=>dispatch({type:"ARRAY",payload:tasks})}>submit</button>
            </form>
        </div>
    </div>
    </div>
    <div class="form">
        <Link class="btn2" to="/home">Go To Home</Link>
        </div>
        
</div>


  )
}

export default Form

