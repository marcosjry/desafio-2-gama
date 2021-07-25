import React from "react";
import NavBar from "../../components/Nav/NavBar";
import Footer from "../../components/Nav/Footer";
import BodyHome from './styled';
import './home.css';



const Home: React.FC = () => {
    
    return (
        <>
            <BodyHome>
                <NavBar />
                <div className="Conteudo">
                    <h1>Seja bem vindo a loja <span>M - Store</span></h1>
                    <h2>Aqui você poderá comprar os melhores jogos nos melhores preços na aba <span>PRODUTOS</span>! <br /> além de poder se cadastrar na aba <span>CLIENTE</span>.</h2>
                    <h3>Fique a vontade para usufruir do nosso serviço e aproveitar!</h3>
                </div>
                <Footer />
            </BodyHome>

        </>)
}

export default Home;