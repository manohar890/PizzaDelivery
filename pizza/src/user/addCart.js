import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderLogin from '../components/header2';

function AddCart() {
    var {id}=useParams();
    var [data,setData] = useState({});
    var[x,setX]= useState(0);
    var navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/getById?id="+id).then((response)=>{
            setData(response.data);
        });
  
    },[]);
    const increment=(event)=>{
      setX(event);
    }
  
    const handleAdd=()=>{
      axios.post("http://localhost:8080/addToCart",{
        'itemName':data.foodName,
        'itemQuantity':x,
        'cost':data.cost
      })
      alert("item added to cart");
    }
  return (
    <div>
      <HeaderLogin/>
    <div className='col-md-4' style={{marginLeft:'auto',marginRight:'auto'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <form className='form-control' onSubmit={handleAdd}>
      <h3>Food Id :  {data.foodid}</h3>
       <h3> Item : {data.foodName}</h3>
       < h3>Cost : {data.cost}</h3> 
      <h3> Quantity :</h3>
      <input type="number" className='form-control' onChange={(e)=>increment(e.target.value)} style={{width:'80px'}}/>
      <br/>
      <input type="submit" value="Add" className='btn btn-outline-success'/>
        </form>
    </div>
    </div>
  )
}

export default AddCart;