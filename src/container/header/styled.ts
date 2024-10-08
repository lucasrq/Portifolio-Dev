import { styled } from "styled-components";


export const Container = styled.header`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin-top:40px;
    
`
export const ContainerHeader = styled.div`
@media screen and (min-width: 1025px) {
        display:flex;
        justify-content:space-between;
        width:65%;
        position:fixed;
        padding-top:60px;
        background-color:#0f0e17;
        z-index:1;
        .Links{
            text-align:center;
            align-items:center;
            display:flex;
        }
        .HeaderProfile {
        display: flex;
        
        img {
            width: 100px;
            height: 100px;
            margin-right:15px;
        }
        
        h3 {
            text-align: left;
            color: #fffffe;
            line-height: 100px;
        }
    }
}    

@media screen and (min-width: 601px) and (max-width: 1024px) {
        display:flex;
        justify-content:space-between;
        width:65%;
        .Links{
            text-align:center;
            align-items:center;
            display:flex;
        }
        
        .HeaderProfile{
        display:flex;
        
            img{
                width:50px;
                height:50px;
                background:none;
            }
            h3{
                text-align:left;
                align-items:center;
                color:#fffffe;
                line-height:50px;
            }
        }
}
@media screen and (max-width: 601px) {
        width:65%;
        margin-bottom:20px;

        .Links{
            text-align:center;
            align-items:center;
            display:flex;
        }
        .HeaderProfile{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            
                img{
                    width:50px;
                    height:50px;
                }
        }
}
`