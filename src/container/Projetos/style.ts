import {  styled } from "styled-components";

export const Container = styled.section`
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
  .LinkGit{
  }
`