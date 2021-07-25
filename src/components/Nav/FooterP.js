import React from 'react';
import './Style.css';
import { LinkMenu } from './styled';


export default class FooterP extends React.Component {
    render() {
        return <div>
            <footer>
                <div className="FootP">
                    <p>&copy; Copyright @ 2021 Design & Code - </p><LinkMenu className="Linkspace" to="https://www.linkedin.com/in/marcos-ant%C3%B4nio-0214a820a/">Marcos</LinkMenu>
                </div>
            </footer>
        </div>

    }
}

