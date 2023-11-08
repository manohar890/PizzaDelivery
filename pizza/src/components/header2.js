import pizza from '../images/pizza.jpg';
function HeaderLogin(){
    
    return(
        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    < h1 style={{color:'white'}}> Best Food</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button >
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/foodItems" style={{color:'white'}}>Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:'white'}}>About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:'white'}}>Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:'white'}}>Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/cartitems" style={{color:'white'}}>Cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/orders" style={{color:'white'}}>Orders</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/viewStore" style={{color:'white'}}>View Stores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/user" style={{color:'white',marginLeft:"600px"}}>Log Out</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}

export default HeaderLogin;