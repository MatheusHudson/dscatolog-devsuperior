import React from 'react';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <h4>
                <a className="nav-logo-text" href="#">DS Catalog</a>
            </h4>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <a className="active" href="#">HOME</a>
                </li>
                <li>
                    <a href="#">CATÁLAGO </a>
                </li>
                <li>
                    <a href="#">ADMIN</a>
                </li>

            </ul>
        </div>
    </nav>
)



export default Navbar;