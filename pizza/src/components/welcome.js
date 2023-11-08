import Header from "./header";

function Welcome(){
    return(
        <div>
        <Header />
     <div className="col-md-3" style={{marginLeft:'auto',marginRight:'auto',marginTop:'200px'}}>
      <form className="form-control">
     <h1 > Login  As:</h1>
     <br/>
      <a href="/admin" className="btn btn-outline-primary form-control"><b>Admin</b></a>
      <br/>
     < br/>
      <a href="/user" className="btn btn-outline-secondary form-control"><b>User</b></a>
      </form>
     </div>
      </div>
    );
}
export default Welcome;