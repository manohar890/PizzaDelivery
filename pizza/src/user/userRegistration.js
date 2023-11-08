import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

function UserRegistration(){
    const firstName=useRef();
    const lastName=useRef();
    const userName = useRef();
    const userPassword= useRef();
    const confirmPassword= useRef();
    var  [x,setX]=useState("");
    var [users,setUsers]=useState([]);
    var navigate= useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/users").then((response)=>
        setUsers(response.data)
        );
    },[]);
const handleSubmit=()=>{
    var k=0;
if(userPassword.current.value===confirmPassword.current.value){
    users.forEach((data)=>{
        if(data.userName===userName.current.value){
            k=1;
            alert("username already taken.")
        }
    })
    if(k===0){
    axios.post("http://localhost:8080/register",{
        "fName":firstName.current.value,
        "lName":lastName.current.value,
        "userName":userName.current.value,
        "userPassword":userPassword.current.value
    })
    alert("user Registered Successfully. Click ok to go Login Page");
    navigate("/user ")
    } 
}
else{
    setX("Password missmatched");
    navigate("/register")
}


}
    return(
        <div>
            <Header/>
            <br/>
            <br/>
            <br/>
            <div className="col-md-3" style={{marginLeft:'auto',marginRight:'auto'}}>
            <form onSubmit={handleSubmit} className="form-control col-md-3" >
            <h3>Enter Details:</h3>
            <br/>
            <input type="text" placeholder="First Name" ref={firstName} required className="form-control"/>
                <br/>
                <input type="text" placeholder="Last Name" ref={lastName} required className="form-control"/>
                <br/>
                <input type="text" placeholder="enter Email" ref={userName} required className="form-control" pattern="^([\w]*[\w\.]*(?!\.)@gmail.com)"/>
                <br/>
                <input type="passowrd" placeholder="enter password" ref={userPassword} required className="form-control"/>
                <br/>
                <input type="text" placeholder="confirm password" ref={confirmPassword} required className="form-control"/>
                <br/>
                <small style={{color:"red"}}>{x}</small>
                <br/>
                <input type="submit" value="Register" className="form-control btn btn-success"/>
                <div className="form-control">
                    <a href="/user" className="btn btn-outline-primary form-control">Back</a>
                </div>
            </form>
            </div>
        </div>
    );
}

export default UserRegistration;