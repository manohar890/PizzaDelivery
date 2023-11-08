import React ,{ useRef }from 'react';
import axios from 'axios';

function PizzaStore() {
    const state=useRef();
    const city = useRef();
    const address= useRef();
    const phoneNumber= useRef();
    const handleSubmit=()=>{
      try{
        axios.post("http://localhost:8080/addPlace",{
          "state":state.current.value,
          "district":city.current.value,
        "address":address.current.value,
        "phoneNumber":phoneNumber.current.value
        }
        )
  
      }catch(ex){
  
      }
    }
  return (
    <div>
        
        <div className='col-md-4' style={{marginLeft:'35%'}}>
      <br/>
      <br/>
        <h4 style={{color:'white', textAlign:'center', padding: 30 }}>Add Store</h4>
          <form className='form-control' onSubmit={handleSubmit}>
            <input type="text"  ref={state} placeholder='state'className='form-control'  required/><br/>
            <input type="text"  ref={city} placeholder='city'className='form-control'  required/><br/>
            <input type="text"  ref={address} placeholder='Address'className='form-control'  required/><br/>
            <input type="text"  ref={phoneNumber} placeholder='phone number' className='form-control' required/><br/>
            <input type="submit" value='Submit'className='form-control btn btn-success'/>
            <br/>
            <br/>
            <div className='form-control'>
            <a href='/options' className="form-control btn btn-outline-secondary" >Back</a>
            </div>
          </form>
         
    </div>
    
    </div>
  )
}

export default PizzaStore