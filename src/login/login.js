import React , { useState }from 'react'
import './login.css'
import {useNavigate} from "react-router-dom"


const Login = () => {
    const [firstInp, setFirstInp] = useState("");
    const [secondInp, setSecondInp] = useState("");
    const [inputEmpty, setInputEmpty] = useState(false);
    const [notFound,setNotFound]=useState(false);


    const sameInput = (e) => {
       if(e.target.name === "name"){
          setFirstInp(e.target.value);
       }
       else{
          setSecondInp(e.target.value);
       }
    }

   let navigate = useNavigate()
    const submitHandle = (e) => {
       e.preventDefault();

       setInputEmpty(true);

       const user = [
        {
          name: "Vignesh",
          password:"1234",
        },
        {
           name: "Rajesh",
           password:"1234"
        },
        {
            name: "Aravind",
            password:"1234"
         },
         {
            name: "Surya",
            password:"1234"
         },
         {
            name: "Murugan",
            password:"1234",
         }
      ]

      let Names = user.find((e)=>e.name === firstInp && e.password === secondInp)
      console.log(Names)

      if(Names){
      navigate('/home')
      }
      else{
      setNotFound(true)
      }
}
  return (
    <>
    <h1>Log In</h1>
<div class="row">
   <div class="col">
      <div class="logincontent">
            <form id="function" onSubmit={submitHandle}>
                  <input name='name' onChange={sameInput} value={firstInp} placeholder="User Name" id="MAIL"/>
                  {firstInp === "" && inputEmpty && <div class="loginpara">Please Fill the User Name</div>}
                  <div class="pass">
                  <input type="password" onChange={sameInput}  value={secondInp} placeholder="Password" id="PASSWORD"/>
                  {secondInp === "" && inputEmpty && <div class="loginpara">Please Fill the Password</div>}
                  </div>
                  <button class="btn">submit</button>
                  { notFound && <div class="loginpara">Not found</div>}     
            </form>
       </div>
       
    </div>
 
</div>
</>
  )
}

export default Login