import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin-top:50px;
`

export const ContainerHeader = styled.div`
@media screen and (min-width: 1025px) {
        display:grid;
        grid-template-columns:45% 55%;
        width:65%;
}    

@media screen and (min-width: 601px) and (max-width: 1024px) {
        display:flex;
        justify-content:space-between;
        width:65%;

}

@media screen and (max-width: 601px) {
        width:65%;
        
}
`
