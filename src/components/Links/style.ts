import styled from 'styled-components'
import { Props } from '.'


const LinksStyles = styled.a<Props>`
    
    @media screen and (min-width: 1025px) {
    font-size:${(props) => props.size == 'big' ? '22px' : '16px' };
    color:${Props => Props.color == 'primaria' ? '#fffffe' : '#0f0e17'};
    background-color:none;
    border: none;
    cursor:pointer;
    text-decoration:none;
    padding-right:20px;
    line-height:50px;

    &:hover{
        color:#cccee2;
    }
}    

@media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size:${(props) => props.size == 'big' ? '22px' : '16px' };
    color:${Props => Props.color == 'primaria' ? '#fffffe' : '#0f0e17'};
    background-color:none;
    border: none;
    cursor:pointer;
    text-decoration:none;
    padding-right:20px;
    line-height:50px;

    &:hover{
        color:#cccee2;
    }
}

@media screen and (max-width: 601px) {
    font-size:${(props) => props.size == 'big' ? '22px' : '16px' };
    color:${Props => Props.color == 'primaria' ? '#fffffe' : '#0f0e17'};
    background-color:none;
    border: none;
    cursor:pointer;
    text-decoration:none;
    padding-right:20px;
    line-height:50px;

    &:hover{
        color:#cccee2;
    }
}
`


export default LinksStyles