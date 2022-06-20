import React from "react";
import { Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import HomePage from "./components/homePage";
import Login from "./components/login/login";
import Register from "./components/register/register.js"
import Header from "./components/header";
import Footer from "./components/footer";
import WrongPage from "./components/wrongPage";
import DonationList from "./components/donationlist";
import AddBloodDonation from "./components/addBloodDon";
import MyProfile from "./components/myprofile";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    // console.log(user);
    setUser(user);
    localStorage.setItem("name", user.name)
    localStorage.setItem("_id", user.id)
    localStorage.setItem("login_type", user.type)
    localStorage.setItem("token", user.token)
    window.location.href = '/';
  }

  function logout() {
    setUser(null);
    localStorage.setItem("name", "")
    localStorage.setItem("_id", "")
    localStorage.setItem("login_type", "NL")
    localStorage.setItem("token", "")
    window.location.href = '/';
  }

  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Header />

          </li>
          <ul class="navbar-nav ml-auto jz">
            {(localStorage.getItem("login_type") == "NL" || localStorage.getItem("login_type") == null ) ? (
              <>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link btn btn-light">
                    Zarejestruj się
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link btn btn-light">
                    Zaloguj się
                  </Link>
                </li>
              </>
            ) : (


              <li className="nav-item">
                <a onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                  Wyloguj {localStorage.getItem("name")}
                </a>
              </li>
            )}
          </ul>


        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/"]} component={HomePage} />
          <Route exact path={"/donation_list"} component={DonationList} />
          <Route exact path={"/add_donation"} component={AddBloodDonation} />
          <Route exact path={"/my_profile"} component={MyProfile} />
          <Route path={"/login"}
            render={(props) => (
              <Login {...props} login={login} />
            )} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"*"} component={WrongPage} />
        </Switch>
      </div>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
