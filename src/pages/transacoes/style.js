import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    Justify-content: center;
    margin-top: 100px;
    gap: 50px;
    width: 100%;
    
`

export const BlockSaldo = styled.div`
    width: 20%;
    height: 150px;
    box-shadow: 0px 0px 8px 2px #C76565;
    background-color: #fefefe;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    font-size: 20px;

`


export const Onblock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 10px

`
export const BlockValues = styled.div`
    display:flex;
    flex-direction: column;
    Justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid black;
    width: 11%;
    height: 150px;

`

export const Paragraph = styled.p`
    font-size:18px;
    font-weight: bold;

`


export const NewButton = styled.button`
    padding: 5px;
    border-radius: 10px;
    border: none;
    width: 55%;
    background-color: #C76565;
    color: white;
    cursor: pointer;
    focus: none

`

export const NewInput = styled.input`
    padding: 10px;
    width: 50%;
    border-radius: 10px;
    border: 1px solid #C76565 ;
    outline: none;
    webkit-appearance: none;
`

