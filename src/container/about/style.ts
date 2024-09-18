import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin:0 auto;
    padding-bottom:30px;
`

export const ContainerHeader = styled.div`
@media screen and (min-width: 1025px) {
        width:65%;
}    

@media screen and (min-width: 601px) and (max-width: 1024px) {
        width:65%;
}

@media screen and (max-width: 601px) {
        width:75%;
        h3{
                text-align:left;
                padding:0;
                margin-bottom:15px;
        }
}
`
