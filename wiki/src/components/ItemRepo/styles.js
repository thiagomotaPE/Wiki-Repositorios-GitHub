import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    padding: 20px;
    margin: 5px 0;

    border: 1px solid #FAFAFA60;
    border-radius: 20px;
    
    display: flex;
    flex-direction: column;
    
    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 10px;
    }

    .entrarRepo{
        margin-bottom: 8px;
        text-decoration: none;
        color: #FAFAFA;
    }

    .remover{
        text-decoration: none;
        color: #FF0000;
    }

    a:hover{
        text-decoration: underline;
    }

`