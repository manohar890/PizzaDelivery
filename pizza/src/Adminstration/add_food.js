import React, { useRef } from 'react'
import axios from 'axios';
import Header from '../components/header3';
 function AddFood() {
  
  const foodName= useRef();
  const cost= useRef();
  const handleSubmit=()=>{
    try{
      axios.post("http://localhost:8080/addItem",{
      "foodName":foodName.current.value,
      "cost":cost.current.value
      }
      )

    }catch(ex){

    }
  }
  return (
    <div>
      <Header />
    <div className='col-md-4' style={{marginLeft:'35%'}}>
      <br/>
      <br/>
        <h4 style={{color:'white', textAlign:'center', padding: 30 }}>Add Food Items</h4>
          <form className='form-control' onSubmit={handleSubmit}>
         <input type="text"  ref={foodName} placeholder='Food Name'className='form-control'  required/><br/>
            <input type="text"  ref={cost} placeholder='cost' className='form-control' required/><br/>
            <input type="submit" value='AddFood'className='form-control btn btn-success'/>
            <br/>
            <br/>
            <div className='form-control'>
            <a href='/options' className="btn btn-outline-primary form-control">Back</a>
            </div>
          </form>
    </div>
    </div>
  )
}
export default AddFood;