import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import HeaderLogin from "./header2";


function FoodItems(){
    var [data,setData] = useState([]);
    var id = useRef();
    var navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/getAllItems").then((response)=>{
            setData(response.data);
        })
    },[]);
    const handleaddCart=(id)=>{
        navigate("/AddToCart/"+id);
    }
    return(
        <div>  
            <HeaderLogin />
            <br/>
            <div className="col-md-3">
            <input type="search" ref={id} className="form-control" placeholder="enter Item name"/>
            <button className="btn btn-success">search</button>
            </div>
            <div className="col-md-5" style={{marginLeft:'auto',marginRight:'auto'}}>
                <form className="form-control">
            <table className="table table-striped table-condensed table-bordered">
            <tbody>
            <tr>
                <th>Food Id</th> 
                <th>Food Item</th> 
                <th>cost</th> 
                <th></th>
            </tr>   
                {data.map((res)=>(
                    <tr key={res.foodid}>
                    <td >{res.foodid}</td>
                    <td>{res.foodName}</td>
                    <td>Rs.{res.cost}</td> 
                    <td><button className="btn btn-primary" onClick={()=>handleaddCart(res.foodid)}>Add to cart</button></td>
                    </tr>
                ))}    
            </tbody>   
            </table>      
            </form>
            </div>
        </div>
    )
    
}
export default FoodItems;