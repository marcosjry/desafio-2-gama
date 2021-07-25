import React from 'react';
import './Style.css';
import { LinkMenu } from './styled';
import Mstore from '../../images/logo.png';

export default class NavBar extends React.Component {
    render() {
        return <>
            <nav>
                <div className="Navbar">

                    <ul>
                        <li><img className="Logo" src={Mstore} /></li>
                        <li><LinkMenu to="/">Home</LinkMenu></li>
                        <li><LinkMenu to="/produtos">Produtos</LinkMenu></li>
                        <li><LinkMenu to="/cliente">Cliente</LinkMenu></li>
                    </ul>
                </div>
            </nav>
        </>
    }
}