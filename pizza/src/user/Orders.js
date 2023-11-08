import axios from "axios";
import { useEffect, useState } from "react";
import HeaderLogin from "../components/header2";


function Orders(){

    var [data,setData]= useState([]);

    const handleOrder=(id)=>{
        if(window.confirm("are you sure to cancel Order")){
            axios.delete("http://localhost:8080/deleteOrder/"+id);
            alert("item deleted from orders"+id);
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:8080/getOrders").then((response)=>{
            setData(response.data);
        })
    },[]);
    return(
        <div>
            <HeaderLogin />
        <div className='col-md-5' style={{marginLeft:'auto',marginRight:'auto'}}>
            {data.map((res)=>(
                        <>
                        <form className="form-control">
                        <h3>Order Id : {res.orderId}</h3>
                        <h3>Order Item : {res.itemName}</h3>
                        <h3>Item Cost : {res.cost}</h3>
                        <h3 style={{color:'green'}}>Order Placed </h3>
                         <button className="btn btn-outline-danger" onClick={()=>handleOrder(res.orderId)}>Cancel</button>
                        </form> 
                            </>
                ))}    
        </div>
        </div>
    );
}

export default Orders;