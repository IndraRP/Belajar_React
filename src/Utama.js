import React from "react";
import {Routes, Route} from 'react-router-dom';

import Gallery from './page/Gallery';
import Beranda from "./page/beranda";
import tentangsaya from "./page/tentangsaya";
import karya from "./page/karya";
import kontak from "./page/kontak";
import cart from "./page/cart";
import pegawai from "./page/pegawai";


import './page/page_css/Header.css'

class Utama extends React.Component{
    render() {
        return(
            <Routes>
                    <Route exact path="/" Component={Beranda} />
                    <Route exact path="/tentangsaya" Component={tentangsaya} />
                    <Route exact path="/karya" Component={karya} />
                    <Route exact path="/kontak" Component={kontak} />
                    <Route exact path="/Gallery" Component={Gallery} />
                    <Route exact path="/cart" Component={cart} />
                    <Route exact path="/pegawai" Component={pegawai} />


            </Routes>
        )
    }
}

export default Utama;
