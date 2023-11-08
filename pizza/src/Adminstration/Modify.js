import React, { useRef} from 'react'

function Modify() {
    const foodId = useRef();
    const cost= useRef();
    const handleSubmit=()=>{
        alert("Modified sucessfully!!!")
      
    }
  return (
    <div>
        <h4>Modify</h4>
        <div className='col-md-4' style={{marginLeft:'35%'}}>
      <br/>
      <br/>
        <h4 style={{color:'white', textAlign:'center', padding: 30 }}>Modify</h4>
          <form className='form-control' onSubmit={handleSubmit}>
            <input type="text"  ref={foodId} placeholder='food Id' className='form-control' required/><br/>
            <input type="text"  ref={cost} placeholder='price' className='form-control' required/><br/>
            <input type="submit" value='Submit'className='form-control btn btn-success'/>
          </form>
          <a href='/' className="btn btn-secondary" style={{textAlign:'center', marginLeft:'40%'}}>Back</a>
    </div>
    
    </div>
  )
}

export default Modify