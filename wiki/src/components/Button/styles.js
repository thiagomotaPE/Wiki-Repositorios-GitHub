import styled from "styled-components";

export const ButtonContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    cursor: pointer;

    background-color: #FAFAFA;
    color: #000000;

    height: 62px;
    width: 10%;

    margin: 20px;
    padding: 3px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &: hover{
        background-color: #FAFAFA40;
        color: #FAFAFA60;
    }
`