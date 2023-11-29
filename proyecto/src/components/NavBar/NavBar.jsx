import React from 'react';
import './NavBar.css';
import logo from './logo192.png';
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function NavBar(props) {
    return (
        <div className='nav'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='center'>
                <ul>
                    <a href="#" >Vehiculos</a>
                    <a href="#" >Electrónica</a>
                    <a href="#" >Libros</a>
                </ul>
            </div>
            <div className='user'>
                <button className='button'>
                    <MdShoppingCart className='icon' />
                </button>
                <button className='button'>
                    <FaUser className='icon' />
                </button>
            </div>
        </div>
    );
}

export default NavBar;