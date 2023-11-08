import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../components/header2";


function ViewCart(){
    var [data,setData]= useState([]);
    var navigate = useNavigate();

    const handleaddCart=(id)=>{
        
        if(window.confirm("are you sure to delete item from cart")){
            axios.delete("http://localhost:8080/delereOrder/"+id);
            alert("item deleted from cart");
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/getCartItems").then((response)=>{
            setData(response.data);
        });
    },[]);
    const handleOrder=()=>{
        var sum = 0;

        data.forEach((x)=>{
            var mul=x.itemQuantity * x.cost;
            sum+=mul;
            axios.post("http://localhost:8080/placeOrder",x);
        })
        navigate('/payment/'+sum);
    }
    return(
        <div>
            <HeaderLogin />
        <div className='col-md-5' style={{marginLeft:'auto',marginRight:'auto'}}>
            {data.map((res)=>(
                        <>
                        <form className="form-control">
                        <h3>Item Name : {res.itemName}</h3>
                        <h3>Item Quantity : {res.itemQuantity}</h3>
                        <h3>Item Cost : {res.cost}</h3>
                        <h3>Total Cost : {res.cost * res.itemQuantity}</h3>
                            <button className="btn btn-outline-danger" onClick={()=>handleaddCart(res.cartId)}>Delete</button>
                        </form> 
                            </>
                ))}    
                <br/>
             <button className="btn btn-success" onClick={()=>handleOrder()}>Place Order</button>
        </div>
        </div>
    );
}

export default ViewCart;