function Header(){
    
    return(
        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    < h1 style={{color:'white'}}> Best Food</h1>
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button >
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" style={{color:'white'}}>Home</a>
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
        <a class="nav-link" href="/viewitems" style={{color:'white'}}>View Items</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin" style={{color:'white',marginLeft:"600px"}}>Log Out</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Header;