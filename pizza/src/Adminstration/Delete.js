import axios from 'axios';
import React,{useRef} from 'react'
import Header from '../components/header3';

function Delete() {
    const foodId = useRef();
    
    const handleSubmit=()=>{
       if(window.confirm("Are you sure to delete")){
                  axios.delete("http://localhost:8080/deleteFood/"+foodId.current.value);
                  alert("Food Item Deleted");
       }
      
    }
  return (
    <div>
      <Header/>
        <div className='col-md-3' style={{marginLeft:'auto',marginRight:'auto'}}>
      <br/>
      <br/>
        <h4 style={{color:'white', textAlign:'center', padding: 30 }}>Delete Item</h4>
          <form className='form-control' onSubmit={handleSubmit}>
            <input type="text"  ref={foodId} placeholder='food Id' className='form-control' required/><br/>
            <input type="submit" value='Dlete'className='form-control btn btn-danger'/>
            <br/>
            <br/>
            <div className='form-control col-md-2'  > 
            <a href='/options' className="btn btn-outline-secondary form-control" >Back</a>
            </div>
          </form>
    </div>
    
    </div>
  )
}

export default Delete