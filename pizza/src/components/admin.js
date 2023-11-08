import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";


function Admin(){
    var [type,setType]=useState("password");
    const username= useRef();
    const Password=useRef();
    var navigate=useNavigate();
    const handleSubmit=()=>{
        if(username.current.value==='admin' && Password.current.value==='admin123'){
            navigate("/options");
        }else{
           alert("Invalid Details...")
        }
    }
    const handlechange= ()=>{
            if(type === "password"){
            setType("text")
            }
            if(type==="text"){
            setType("password");
            }
    }

    
    return(
        
           <div style={{textAlign:'center', color:'white'}}>
            <Header />
            <br/>
            <div className="col-md-3 " style={{marginLeft:'auto',marginRight:'auto',marginTop:'100px'}} >
                <form onSubmit={handleSubmit} className="form-control">
                <h5>Login:</h5>
                    <br/>
                    <input type="text" ref={username} placeholder="userName" className="form-control"/>
                    <br/>
                    <input type={type} ref={Password} placeholder="password" className="form-control"/>
                    <input type="checkbox" onChange={handlechange}/><small style={{marginRight:'200px'}}>Show Password</small>
                    <br/>
                    <br/>  
                    <input type="submit" value="login" className="form-control btn btn-success"/>
                    <br/>
                    <br/>
                    <div className="form-control">
                    <a href="/" className="btn btn-outline-primary form-control" ><b>Back</b></a>
                    </div>
                </form>
            </div>
            
           
           </div>
        
    );
}

export default Admin;