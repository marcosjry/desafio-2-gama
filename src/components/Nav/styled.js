import { Link } from "react-router-dom";
import styled from 'styled-components';

export const LinkMenu = styled(Link)`


    & {
        display:block;
        position:relative;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: #51f7bb;
        opacity: 0;
        transition: opacity 350ms, transform 500ms;
}
    &:hover::after,
    &:focus::after {
	opacity: 1;
	transform: translate3d(0, 0.2em, 0);
}
    &:hover::after,
    &:focus::after{
    transform: scale(1);
}
    &::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
}
`

///Ia criar um componente pra apresentar a descrição de cada produto comprado mas está me faltando tempo :[
export const LinkProdutos = styled(Link)`


    & {
        display:block;
        position:relative;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.15em;
        background-color: #51f7bb;
        opacity: 0;
        transition: opacity 350ms, transform 500ms;
}
    &:hover::after,
    &:focus::after {
	opacity: 1;
	transform: translate3d(0, 0.2em, 0);
}
    &:hover::after,
    &:focus::after{
    transform: scale(1);
}
    &::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
}
`