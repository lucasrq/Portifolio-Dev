import styled, { keyframes }  from "styled-components";

export const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
export const slideDowm = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
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
           
            &:hover > :not(:hover){
                opacity:.4;
                transform:scale(0.9)
            }
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
           
            &:hover > :not(:hover){
                opacity:.4;
                transform:scale(0.9)
            }
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
        height:200px;
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
    @media screen and (min-width: 601px) and (max-width: 1024px){
    text-align:left;
    justify-content:center;
    align-items:center;
    width:65%;
    color:#fff;
    margin:40px auto;
    }
    @media screen and (max-width: 601px){
    text-align:left;
    justify-content:center;
    align-items:center;
    width:65%;
    color:#fff;
    margin:10px auto;
    h3{
        text-align:left;
        padding:0;

    }
    }

`