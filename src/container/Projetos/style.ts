import {  styled } from "styled-components";

export const Container = styled.section`
@media screen and (min-width: 1025px) {
  width:100%;
    max-width:1346px;
    margin:0 auto;
    .ProjectList{
        align-items:center;
        padding-top:20px;
        width:100%;
        height:350px;
        display: grid;
        grid-template-columns:20% 80%;
        gap: 20px;
        padding: 20px;
        button{
          padding:5px;
          border-radius:9px;
        }
    }
    .ProjectListLeft{
      align-items:center;
        padding-top:20px;
        width:100%;
        height:350px;
        display: grid;
        grid-template-columns:80% 20%;
        gap: 20px;
        padding: 20px;
        button{
          padding:5px;
          border-radius:9px;
        }
  }
}
@media screen and (min-width: 601px) and (max-width: 1024px) {

}

@media screen and (max-width: 601px) {
    text-align:center;
    margin:0 auto;
    align-items:center;
    padding:30px;
    p{
      margin-top:20px;
      text-align:left;
    }
    .Title{
      margin-bottom:40px;
    }
    .ProjectList{
      white-space:break-spaces;
      width:260px;
      margin-bottom:14px;
      text-align:center;
      margin:0 auto;
      align-items:center;
      button{
          padding:5px;
          border-radius:9px;
        }
    }
    .ProjectListLeft{ 
        width:260px;
        margin-bottom:14px;
        text-align:center;
        margin:0 auto;
        align-items:center;
        margin-top:90px;
        display:flex;
        flex-direction: column-reverse;
        white-space:break-spaces;
        button{
          padding:5px;
          border-radius:9px;
        }
  }
  .LinkGit{
    width:100%;
  }
}

`