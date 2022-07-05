import styled from "styled-components";

export const FeedbackArea = styled.div`
    display: flex;
    width: 230px;
    margin: 20px auto;
    gap: 40px;
` 
export const ButtonGreen = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:none;
    background: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`
export const ButtonYellow = styled(ButtonGreen)`
        background: yellow;
`
export const ButtonRed = styled(ButtonGreen)`
        background: tomato;
`