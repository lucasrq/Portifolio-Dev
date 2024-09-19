import styled from "styled-components";
import { Props, PropsText } from ".";


const CardProjectStyle = styled.div<Props>`
    width:100%;
    min-width:220px;
    min-height:200px;
    background-image:url(${Props => Props.imagem});
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    border:1px solid white;
    border-radius:15%;
    display:flex;
    padding:20px;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    margin:2px;
    position:relative;
    a{
        text-decoration:none;
    }
    .Visit{
        display:flex;
        position:absolute;
        left:50;
        top:130px;
        
        div{
            margin:10px;
            padding:4px;
        }
    }

 

`
export const CardProjectStyleR = styled.div<PropsText>`
    
`
export default CardProjectStyle