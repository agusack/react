import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav'>
            <img src="../../../public/logo192.png" alt="" />
            <div className='center'>
                <button className='button'>Inicio</button>
                <ul>
                    <a href="#" >Vehiculos</a>
                    <a href="#" >Electrónica</a>
                    <a href="#" >Libros</a>
                </ul>
            </div>
            <button className='button'>Loggin</button>
        </div>
    );
}

export default NavBar;