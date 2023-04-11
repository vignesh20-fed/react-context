import React, { useContext, useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { Icon } from '@iconify/react';
import './home.css'
import { stateContext } from '../context/statecontext';

const Home = () => {
    // let given = JSON.parse(localStorage.getItem("formdetails"))
    // console.log(given)
    // const [result,setResult]=useState(given)
 
    const {state:{form},dispatch}=useContext(stateContext)
    console.log("statehome",form)


    const deleted =(value)=>{
       let newtask = [...form];
       newtask.splice(value,1);
       dispatch({
        type:"ARRAY",
        payload:newtask,
       }
       )
    }

    let navigater = useNavigate();
    const edit =(value,index)=>{
      navigater("/form")
      dispatch({
        type:"EDIT",
        payload:[value,index]
      })
    }

    // const deleted=(e)=>{
    //       delete given[e];
    //       let main = given.flat();
    //       localStorage.removeItem("formdetails")
    //       localStorage.setItem("formdetails",JSON.stringify(main));
    //       setResult(main)
    // } 

    // let navigater = useNavigate();
    // const edit = (e)=>{
    //   let process = [given[e],e];
    //   localStorage.removeItem("edit")
    //   localStorage.setItem("edit",JSON.stringify(process))
    //   navigater("/form")
    // }
  return (
    <div>
       <table border={"1"} cellSpacing={"0"} cellPadding={"15"} align={"center"} width={"80%"} >
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Checked</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {/* {result.map((value,index)=>{
                        return<>
                          <tr>
                            <td><span>{value.name}</span></td>
                            <td><span>{value.name2}</span></td>
                            <td><span>{value.Complete ? "true" : "false"}</span></td>
                            <td><button class="btns" onClick={() => edit(index)}><Icon className="i" icon="material-symbols:edit-document" /></button></td>
                            <td><button class="btns" onClick={() => deleted(index) }><Icon className="i" icon="ic:baseline-delete" /></button></td>
                          </tr>
                        </>
                    })} */}
                    {form.map((value,index)=>{
                      return <>
                      <tr key = {index}>
                      <td><span>{value.name}</span></td>
                      <td><span>{value.name2}</span></td>
                      <td><span>{value.Complete ? "true" : "false"}</span></td> 
                      <td><button class="btns" onClick={() => edit(value,index)}><Icon className="i" icon="material-symbols:edit-document" /></button></td>
                      <td><button class="btns" onClick={() => deleted(index) }><Icon className="i" icon="ic:baseline-delete" /></button></td>
                      </tr> 
                      </>
                    })}
                </table>
                <div class="home">
                    <Link class="btns" to="/form">Go To Form</Link>
                    <Link class="btns" to="/">Go To login</Link>``
                </div>
    </div>
  )
}

export default Home