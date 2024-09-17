import styled from "styled-components";
import { Props } from ".";

const CardSkills = styled.div<Props>`
    min-width:140px;
    background-color:#232946;
    border-radius:15%;
    display:flex;
    height:140px;
    padding:20px;
    padding-bottom:50px;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    margin:2px;
    img{
        max-width:100px;
        min-height:90px;
        object-fit: cover; 
    }
`

export default CardSkills