import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

export const Container = styled.header`
@media screen and (min-width: 1025px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    width:100%;
    color:#fff;
    margin:90px auto;
}    

@media screen and (min-width: 601px) and (max-width: 1024px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    width:100%;
    color:#fff;
    margin:90px auto;

    h3{
        
        padding:10px;
    }
}

@media screen and (max-width: 601px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    width:100%;
    color:#fff;
    margin:10px auto;
   
    h3:nth-of-type(2){
        line-height:40px;
        padding:10px;
    }


    .LinkStyle{
    @media screen and (min-width: 1025px) {
    font-size:30px;
    padding:20px;
}    

@media screen and (min-width: 601px) and (max-width: 1024px) {
        display:flex;
        justify-content:space-between;
        width:65%;
        font-size:30px;
        padding:20px;
}

@media screen and (max-width: 601px) {
        display:flex;
        width:65%;
        font-size:30px;
        padding:20px;
        color:#fff;
}
    }
}
    
`
export const Icon = styled(FontAwesomeIcon)`
    font-size:30px;
    padding:20px;
`