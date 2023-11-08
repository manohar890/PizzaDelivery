
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

    const User=() => {
      var [type,setType]=useState("password");
      var [username,setUsername]= useState("");
    const [password,setPassword]=useState("");
    var navigate=useNavigate();
    var [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/users").then((response)=>
        setUsers(response.data)
        );
    },[])
    const handleSubmit =  () => {
      var x=false;
        users.forEach((data)=>{
          if(data.userName===username){
            if(data.userPassword===password){
                      x=true;   
            }
          }
        })
          if(x){
            axios.post("http://localhost:8080/set?name="+username);
              navigate("/foodItems");
          }else{
            alert("Inavlid user details");
          }
       };
    const handlechange= ()=>{
      if(type === "password"){
      setType("text")
      }
      if(type==="text"){
      setType("password");
      }
}
const handleusername=(value)=>{
  setUsername(value);
}
const handlepassword=(value)=>{
  setPassword(value);
}
    return(
        
           <div style={{textAlign:'center', color:'white'}}>
            <Header />
            <br/>
            <div className="col-md-3" style={{marginLeft:'auto',marginRight:'auto'}} >
            <br/>
                <form onSubmit={handleSubmit} className="form-control">
                <h2>Login:</h2>
                    <br/>
                    <input type="text" onChange={(e)=>handleusername(e.target.value)} placeholder="userName" className="form-control"/>
                    <br/>
                    <input type={type} onChange={(e)=>handlepassword(e.target.value)} placeholder="password" className="form-control"/>
                    <input type="checkbox" onChange={handlechange} style={{marginLeft:'0px'}}/><small style={{marginRight:'200px'}}>Show Password</small>
                    <br/>
                    <br/>
                    <div className="col-md-4" style={{marginLeft:'auto',marginRight:'auto'}}>
                    <input type="submit" value="login" className=" btn btn-success form-control"/>
                    </div>
                    <br/>
                    <div className="col-md-4 form-control" style={{marginLeft:'auto',marginRight:'auto'}} >
                    <a href="/register" className="btn btn-outline-success form-control" ><b>Register</b></a>
                    <br/>
                    <br/>
                    <a href="/" className="btn btn-outline-primary form-control" ><b>Back</b></a>
                    </div>
                </form>
               
            </div>
            
           
           </div>
        
    );
      }
      

export default User;