import React from 'react'
import '../products.css';


import { Link } from 'react-router-dom';


function Nev() {
    return (
        <div>
            <nav id="navi">
                <img src="logo.png" alt="logo" width="75px"/>
                    <p id="pg_title">PICT STATIONARY</p>
                    <input type="text" id="search" placeholder="Search Stationary"/>
                        <button id="search_btn"></button>
                        <div id="nav_opt">
                            <ul>
                                <li><Link to={'/abhimenu'} >Menu</Link></li>
                                <li><Link to={'/cart'}>Cart</Link></li>
                                <li><Link to={'/usercart'}>Track order</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
    )
}

                export default Nev
