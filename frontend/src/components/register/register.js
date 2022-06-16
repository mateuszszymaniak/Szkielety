import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import BBCtr from "../../services/bloodbank";
import BBRegister from "./bbRegister";
import DocRegister from "./docRegister";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


function Register() {

  return (
    <div className="App">
        <div class="container cont">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-5 col-sm-6 col-xs-7 mb-5">
                    <div class="card rounded">
                        <p></p>
                        <div class="tab-content">
                            <div class="tab-pane container active">
                                <Tabs defaultActiveKey="bb" class="nav nav-tabs justify-content-center bg-light">
                                    <Tab eventKey = "bb" title = "Bank krwi">
                                        <p></p>
                                        <BBRegister/>
                                    </Tab>
                                    <Tab eventKey = "doc" title = "Dawca">
                                        <p></p>
                                        <DocRegister/>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;
