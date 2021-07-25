import React, {useState, useEffect} from "react";
import NavBar from "../../components/Nav/NavBar";
import FooterP from "../../components/Nav/FooterP";
import api from '../../services/api';
import './Produto.css'
import BodyDif from './styled'
import { LinkProdutos } from '../../components/Nav/styled';



interface IProduct {
    id: number;
    name: string;
    photo: string;
    description: string;
    price:number;
}



const Produto: React.FC = () => {

    const ProdutoDb = [
        {
            "id": 1,
            "photo": "https://i.imgur.com/1Ev3YNZ.png",
            "name": "Grand Theft Auto V",
            "description": "Descrição",
            "price": 38.97
        },
        {
            "id": 2,
            "photo": "https://i.imgur.com/k5zNlZ8.png",
            "name": "Horizon Zero Dawn",
            "description": "Descrição",
            "price": 53.97
        },
        {
            "id": 3,
            "photo": "https://i.imgur.com/z2I3RA7.png",
            "name": "The Last of Us II",
            "description": "Descrição",
            "price": 152.00
        },
        {
            "id": 4,
            "photo": "https://i.imgur.com/Ryvm9C3.png",
            "name": "Assassins Creed Odyssey",
            "description": "Descrição",
            "price": 45.00
        },
        {
            "id": 5,
            "photo": "https://i.imgur.com/OHADMdL.png",
            "name": "The Witcher - Wild Hunt",
            "description": "Descrição",
            "price": 99.99
        },
        {
            "id": 6,
            "photo": "https://i.imgur.com/ZSUPZIj.png",
            "name": "Fall Guys",
            "description": "Descrição",
            "price": 30.39
        },
        {
            "id": 7,
            "photo": "https://i.imgur.com/elEQnyE.png",
            "name": "God Of War",
            "description": "Descrição",
            "price": 200.00
        },
        {
            "id": 8,
            "photo": "https://i.imgur.com/ebhhB97.png",
            "name": "Far Cry 6",
            "description": "Descrição",
            "price": 249.99
        }
    ]

    const HandleCart = (index: number ) => {

        const productStorage = JSON.stringify(ProdutoDb[index]);
        localStorage.setItem(`@Produto-${index}`, productStorage)
        alert("Produto comprado com sucesso!")

    }

    return (
        <>
        <BodyDif>
        <NavBar/>
        <div className="Content">
            <div className="PrimaryContent">
                    <h1>Compre os nossos <span>melhores</span> Jogos em Primeira mão!</h1>
            </div>
        </div>
        <div className="Content">
                    <section >
                        {ProdutoDb.map( (prod, index) => (
                    <div className="Product-Content" key={prod.id}>
                        <img className="ImgProduto" src={prod.photo} />
                        <h2>{prod.name}</h2>
                        <LinkProdutos className="LinkProduto">Descrição do Produto</LinkProdutos>
                        <h3>R${prod.price}</h3>
                        <button className="ButtonProduto" onClick={ () => HandleCart(index)}>Comprar</button>
                    </div>
                ))} 
            </section>
        </div>
                <FooterP/>
        </BodyDif>
        </>)
}

export default Produto;