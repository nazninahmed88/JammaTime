import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
              <div>
              <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    {/* <Link to='/home' className="navbar-brand"> <img style={{ width: '60px' }} src="/images/logo.png" alt="" /> </Link> */}
                    <Link to='/home' className="navbar-brand"> <h1>  <span style={{fontFamily: 'Playfair Display'}} className='text fs-3'>JAMA'AH TIME</span></h1> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className=" fs-5  color " to='/home'>Home</Link>
                                
                            </li>
                           
                            <li className="nav-item">
                                <Link  className=" fs-5 color " to='/contact'>Contact</Link>
                            </li>
                            {/* <li className="nav-item">
                                <button className='bg-button p-2'><a  style={{fontFamily: 'Playfair Display'}} className='button fs-5' target="_blank" href="https://play.google.com/store/apps"> Download</a></button>
                            </li> */}
            
                         
                        </ul>
                      
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Header;