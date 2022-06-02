import React from 'react'
import logo from './images/logo.jpg'
//TODO
//Zroznicowane paski w zaleznosci od strony logowania
export default function Header(){
    return(
        <>
            <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
                <div class="container">
                    <a class="navbar-brand" href=""><img src={logo} width="50" height="50" />System banku krwi</a>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        
                    </div>
                </div>
            </nav>
        </>
    )
}