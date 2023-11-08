import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import pizza from './images/pizza.jpg';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Admin from './components/admin';
import User from './components/user';
import Welcome from './components/welcome';
import options from './Adminstration/options';
import AddFood from './Adminstration/add_food';
import PizzaStore from './Adminstration/PizzaStore';
import Modify from './Adminstration/Modify';
import Delete from './Adminstration/Delete';
import ViewStore from './user/ViewStore';
import FoodItems from './components/foodItems';
import AddCart from './user/addCart';
import UserRegistration from './user/userRegistration';
import ViewCart from './user/ViewCart';
import Payment from './user/payment';
import Success from './user/OrderSucces';
import Orders from './user/Orders';
import ViewStores from './components/ViewStores';
import FoodItem from './Adminstration/ViewItems';

function App() {
  const myStyle={
  backgroundImage:`url(${pizza})`,
   height:'100vh',
    fontSize:'20px ',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="welcome-page" style={myStyle}>
      <Router>
        <Routes>
        <Route exact path="/" Component={Welcome}/>
         <Route exact path="/admin" Component={Admin}/>
         <Route exact path="/user" Component={User}/>
         <Route exact path="/storeDetails" Component={PizzaStore}/>
         <Route exact path="/options" Component={options}/>
         <Route exact path="/addFood" Component={AddFood}/>
         <Route exact path="/modifyFood" Component={Modify}/>
         <Route exact path="/deleteItem" Component={Delete}/>
         <Route exact path="/ViewStoreDetails" Component={ViewStore}/>
         <Route exact path="/AddToCart/:id" Component={AddCart}/>
         <Route exact path="/register" Component={UserRegistration}/>
         <Route exact path="/foodItems" Component={FoodItems}/>
         <Route exact path="/cartItems" Component={ViewCart}/>
         <Route exact path="/payment/:cost" Component={Payment}/>
         <Route exact path="/success" Component={Success}/>
         <Route exact path="/orders" Component={Orders}/>
         <Route exact path="/viewStore" Component={ViewStores}/>
         <Route exact path="/viewitems" Component={FoodItem}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
