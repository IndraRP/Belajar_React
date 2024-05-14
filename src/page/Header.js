import React, { Component } from "react";
import {Link} from 'react-router-dom';


class Header extends Component{
    render() {
        return (
            <div>
                <nav>
                <Link to={'/'}>HOME</Link>
                <Link to={'/tentangsaya'}>ABOUT</Link>
                <Link to={'/karya'}>CREATONS</Link>
                <Link to={'/kontak'}>CONTACT</Link>
                <Link to={'/gallery'}>GALLERY</Link> 
                <Link to={'/cart'}>CART</Link> 
                <Link to={'/pegawai'}>PEGAWAI</Link> 

                </nav>

            </div>
        )
    }
}
export default Header;