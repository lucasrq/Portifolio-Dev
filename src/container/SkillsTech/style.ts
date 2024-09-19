import styled, { keyframes }  from "styled-components";

export const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Container = styled.section`
@media screen and (min-width: 1025px) {
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
    justify-content:center;
    align-items:center;
    width:65%;
    color:#fff;
    margin:90px auto;
    .Right{
        position:relative;
        display:flex;
        overflow: hidden;
        justify-content: space-around;
    &:hover .slice{
        animation-play-state:paused;    
    }
        .slice{
            animation: ${slideLeft} 10s infinite linear;
            display:flex;
        }
    }
    .Left{
        padding-right:50px;
        
    p{
        text-align:left;
        line-height:25px;
    }
    }
}  
@media screen and (min-width: 601px) and (max-width: 1024px) {
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
    justify-content:center;
    align-items:center;
    width:65%;
    color:#fff;
    margin:90px auto;

    .Right{
        position:relative;
        display:flex;
        overflow: hidden;
        justify-content: space-around;
    &:hover .slice{
        animation-play-state:paused;    
    }
        .slice{
            animation: ${slideLeft} 10s infinite linear;
            display:flex;
        }
    }
    .Left{
        padding-right:50px;
        
    p{
        text-align:left;
        line-height:25px;
        white-space:break-spaces;
    }
    }
}
@media screen and (max-width: 601px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    width:75%;
    color:#fff;
    margin:0 auto;
    overflow-y:hidden;

    .Right{
        height:40px;
        overflow-x:hidden;
        justify-content: space-around;
        
    &:hover .slice{
        animation-play-state:paused;    
        width:200px;
    }
        .slice{
            display:flex;
            position:relative;
            animation: ${slideLeft} 10s infinite linear;
            height:100%;
            overflow-x:hidden;
            div{
                white-space:nowrap;
                background-color:red;
                display:none;
            }
        }
    }
    .Left{
        overflow-x:hidden;
    p{
        text-align:left;
        line-height:25px;
        white-space:break-spaces;
    }
    }
}
`

export const TitleContainer = styled.div`
    text-align:left;
    justify-content:center;
    align-items:center;
    width:65%;
    color:#fff;
    margin:90px auto;
    h3{
        margin-bottom:-80px;
        margin-top:-50px;
    }
    @media screen and (min-width: 601px) and (max-width: 1024px){
    text-align:left;
    justify-content:center;
    align-items:center;
    width:65%;
    color:#fff;
    margin:40px auto;
    h3{
        margin-bottom:0;
        margin-top:0;
    }
    }
    @media screen and (max-width: 601px){
    margin:10px auto;
    width:350px;
    
    h3{
        text-align:center;
        padding:40px 0;
        margin: 0 auto;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    }

`