import styled from "styled-components";
import {Props} from '.'

export const ButtonStyle = styled.button<Props>`
    font-size:19px;
    color:#fffffe;
    background-color:#ff8906;
    width:100%;
    max-width:260px;
    min-height:40px;
    border:none;
    cursor:pointer;
    button{
        border:none;
        background-color:#ff8906;
        color:#fffffe;
    }
    a{
        text-decoration:none;
    }
    &:focus{
        background-color:#d17710;
        button{
            background-color:#d17710;
        }
    }
    &:hover{
        background-color:#d17710;
        button{
            background-color:#d17710;

}
    }
`