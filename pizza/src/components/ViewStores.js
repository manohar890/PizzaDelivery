import axios from "axios";
import { useEffect, useState } from "react";
import HeaderLogin from "./header2";


function ViewStores(){

    var [data,setData]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/getStores").then((response)=>{
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
                        <h3> Store State : {res.state}</h3>
                        <h3>Store City: {res.district}</h3>
                        <h3>Store Address : {res.address}</h3>
                        <h3>Contact Details : {res.phoneNumber}</h3>
                        </form> 
                            </>
                ))}    
        </div>
        </div>
    );

}

export default ViewStores;