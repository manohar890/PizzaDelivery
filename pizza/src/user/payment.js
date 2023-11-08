import { useNavigate, useParams } from "react-router-dom";
import HeaderLogin from "../components/header2";

function Payment(){
    var {cost}= useParams();
    var navigate=useNavigate();
    const handle=()=>{
        navigate('/success');
    }
    return(
        <div>
            <HeaderLogin />
    <div className="col-md-3" style={{marginLeft:'auto',marginRight:'auto'}}>
  <div id="Checkout" class="inline">
      <form className="form-control" onSubmit={handle}>
      <h1>Pay Invoice</h1>
          <div class="form-group">
              <label for="PaymentAmount">Payment amount : </label>
              <div class="amount-placeholder">
                  <span>Rs.</span>
                  <span>{cost}</span>
              </div>
          </div>
          <div class="form-group">
              <label for="NameOnCard">Name on card</label>
              <input id="NameOnCard" class="form-control" type="text" maxlength="255" required></input>
          </div>
          <div class="form-group">
              <label for="CreditCardNumber">Card number</label>
              <input id="CreditCardNumber" class="null card-image form-control" type="text" required></input>
          </div>
          <div class="expiry-date-group form-group">
              <label for="ExpiryDate">Expiry date :</label>
              <input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7" required></input>
          </div>

          <div class="zip-code-group form-group">
              <label for="ZIPCode">ZIP/Postal code</label>
              <div class="input-container">
                  <input id="ZIPCode" class="form-control" type="text" maxlength="10" required></input>
                  <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i class="fa fa-question-circle"></i></a>
              </div>
          </div>
          <button id="PayButton" class="btn btn-block btn-success submit-button" type="submit">
              <span class="submit-button-lock"></span>
              <span class="align-middle">Pay Rs. {cost}</span>
          </button>
      </form>
  </div>
</div>
</div>
    );
}

export default Payment;