import React from 'react'
import Headers from '../components/header3';
function options()  {
  return (
    <div>
     <Headers />
     <br/>
     <br/>
    <div style={{marginLeft:"auto",marginRight:"auto"}} className="col-md-4">
      <form className='form-control' >
            <a href="/storeDetails" className='btn btn-outline-success form-control'>Add Store</a><br/>
            <br/>
                <a href="/addFood"  className='btn btn-outline-success form-control'>Add Food Item</a><br/>
                <br/>
                <a href="/modifyFood"  className='btn btn-outline-success form-control'>Modify Food Item</a><br/>
                <br/>
                <a href="/deleteItem"  className='btn btn-outline-success form-control'>Delete Food Item</a><br/>
                <br/>
                </form>
                </div>
                </div>
          
  )
}

export default options ;