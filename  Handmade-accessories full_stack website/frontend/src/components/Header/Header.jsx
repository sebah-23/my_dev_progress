import React from "react";
import {link} from "react-router-dom";

function Header (){
    return (
      <header>

        <div>
            <h1>Zemuni</h1>

            <nav>
            <link to = "/"> Home </link>
            <link to = "/products"> Products</link>
            <link to = "/custom-order"> Custom-order </link>
            <link to = "/contact"> Contact </link>


            </nav>

        </div>
             




      </header>

    )



}








export default Header;