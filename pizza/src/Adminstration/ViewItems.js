import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Header from "../components/header3";

function FoodItem(){
    var [data,setData] = useState([]);
    var id = useRef();
    useEffect(()=>{
        axios.get("http://localhost:8080/getAllItems").then((response)=>{
            setData(response.data);
        })
    },[]);
    return(
        <div>  
            <Header />
            <br/>
            <div className="col-md-3">
            <input type="search" ref={id} className="form-control" placeholder="enter Item name"/>
            <button className="btn btn-success">search</button>
            </div>
            <div className="col-md-4" style={{marginLeft:'auto',marginRight:'auto'}}>
            <form className="form-control">
            <table className="table table-striped table-condensed table-bordered">
            <tbody>
            <tr>
                <th>Food Id</th> 
                <th>Food Item</th> 
                <th>cost</th> 
            </tr>   
                {data.map((res)=>(
                    <tr key={res.foodid}>
                    <td >{res.foodid}</td>
                    <td>{res.foodName}</td>
                    <td>Rs.{res.cost}</td> 
                    </tr>
                ))}    
            </tbody>   
            </table>   
            </form>   
            </div>
        </div>
    )
    
}
export default FoodItem;