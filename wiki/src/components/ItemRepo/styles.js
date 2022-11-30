import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    padding: 20px;
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

    a.entrarRepo{
        color: #FAFAFA;
    }

    a.remover{
        color: #FF0000;
    }
`