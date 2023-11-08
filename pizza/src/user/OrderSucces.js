import HeaderLogin from "../components/header2";


function Success(){

        return(
            <div>
                <HeaderLogin />
            <div className="col-md-3" style={{marginLeft:'auto',marginRight:'auto',marginTop:'100px',textAlign:'center'}} >
                <form className="form-control">
               < h1 style={{color:'green'}}>Order Placed</h1>
               </form>
            </div>
            </div>
        );

}

export default Success;