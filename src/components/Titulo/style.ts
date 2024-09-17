import styled from 'styled-components'
import { Props } from '.'
const TitleStyles = styled.a<Props>`
    font-size:${(props) => props.size == 'small' ? '48px' : '27px' };
    color:${Props => Props.color == 'primaria' ? '#fffffe' : '#0f0e17'};
    background-color:none;
    text-decoration:none;
    padding-right:20px;
    line-height:50px;

    @media screen and (max-width: 601px) {
    font-size:${(props) => props.size == 'small' ? '48px' : '27px' };
    color:${Props => Props.color == 'primaria' ? '#fffffe' : '#0f0e17'};
    background-color:none;
    padding-left:20px;
    text-decoration:none;
    padding-right:20px;
    line-height:29px;
    margin-top:8px;
}
@media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size:${(props) => props.size == 'small' ? '48px' : '27px' };
    color:${Props => Props.color == 'primaria' ? '#fffffe' : '#0f0e17'};
    background-color:none;
    padding-left:20px;
    text-decoration:none;
    padding-right:20px;
    line-height:23px;
    margin-top:8px;
}
`


export default TitleStyles