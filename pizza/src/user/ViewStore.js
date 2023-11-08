import React,{useRef} from 'react'

function ViewStore() {
  
    const State= useRef();
    const Area= useRef();
    const handleSubmit=()=>{
        alert("let me search.....")
    }
  return (
    <div>
        
        <div className='col-md-4' style={{marginLeft:'35%'}}>
      <br/>
      <br/>
        <h4 style={{color:'white', textAlign:'center', padding: 30 }}>View Store Details</h4>
          <form className='form-control' onSubmit={handleSubmit}>
            <input type="text"  ref={State} placeholder='State' className='form-control' required/><br/>
            <input type="text"  ref={Area} placeholder='Area'className='form-control'  required/><br/>
            <input type="submit" value='Submit'className='form-control btn btn-success'/>
          </form>
          <a href='/' className="btn btn-secondary" style={{textAlign:'center', marginLeft:'40%'}}>Back</a>
    </div>
    
    </div>
  )
  
}

export default ViewStore