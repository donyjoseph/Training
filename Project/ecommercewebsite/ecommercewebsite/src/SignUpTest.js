import "./styles/sstyle.css";
export default function App() {
  return (
    <div>
     <div class="outercontainer">
          <div class="signupcontainer">
           <h1>Add an address so you can get paid</h1>
            <h2>This will be used as your default business address.</h2>
            <h2>You can always change this later.</h2>
            <div class="row">
              <div class="full">
                <div class="element">
                  <label>Country/Region</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="half">
                <div class="element">
                  <label>First name</label>
                  <input type="text" />
                </div>
              </div>
              <div class="half">
                <div class="element">
                  <label>Last name</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="full">
                <div class="element">
                  <label>Address</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="full">
                <div class="element">
                  <label>Appartment, suite, etc.</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="onethird">
                <div class="element">
                  <label>City</label>
                  <input type="text" />
                </div>
              </div>
              <div class="onethird">
                <div class="element">
                  <label>State</label>
                  <input type="text" />
                </div>
              </div>
              <div class="onethird">
                <div class="element">
                  <label>PIN Code</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="half">
                <div class="element">
                  <label>Phone</label>
                  <input type="text" />
                </div>
              </div>
              <div class="half">
                <div class="element">
                  <label>Website</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="element checkbox">
                <input type="checkbox" />
                <label>This store is registered business</label>
              </div>
            </div>
            <div class="row">
              <div class="half backbutton">
                <button>&#60; Back</button>
              </div>
              <div class="half finishbutton">
                <button>SignUp</button>
              </div>
            </div>
          </div>
        </div>
       </div>
  );
}
