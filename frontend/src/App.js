import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/homePage";
import Login from "./components/login/login";
import Register from "./components/register/register.js"
import Header from "./components/header";
import Footer from "./components/footer";
import WrongPage from "./components/wrongPage";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
    
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
        <Header/>
          
        </li>
        
          { user ? (
            <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
              Logout {user.name}
            </a>
          ) : (            
          <>
          <Link to={"/register"} className="nav-link btn btn-light">
            Zarejestruj się
          </Link>
          <Link to={"/login"} className="nav-link btn btn-light">
            Zaloguj się
          </Link>
          </>
          )}

        
      </div>
    </nav>

    <div className="container mt-3">
      <Switch>
        <Route exact path={["/"]} component={HomePage} />
        <Route exact path = {"/login"} component = {Login} />
        <Route exact path = {"/register"} component = {Register} />
        <Route exact path = {"*"} component = {WrongPage} />
      </Switch>
    </div>
    <hr />
    <Footer></Footer>
  </div>
  );
}

export default App;
