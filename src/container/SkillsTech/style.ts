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
           
            &:hover > :not(:hover){
                opacity:.4;
                transform:scale(0.9)
            }
        }
    }
    .Left{
        padding-right:50px;
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
`