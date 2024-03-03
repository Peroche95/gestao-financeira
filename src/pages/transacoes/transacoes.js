import React, {useState, useEffect} from "react";
import {Container, BlockSaldo, NewButton, NewInput, BlockValues, Paragraph } from "./style"
import { SlArrowDownCircle, SlArrowUpCircle } from "react-icons/sl";

export default function Inicial(){

const [deposito, setDeposito] = useState(0);
const [saque, setSaque] = useState(0);
const [total, setTotal] = useState(0);


useEffect(() => {
    setTotal(deposito - saque);
  }, [deposito, saque]);

function depositar(){
    setDeposito(deposito + parseFloat(document.getElementById("deposito").value));
}

function sacar(){
    setSaque(saque + parseFloat(document.getElementById("saque").value));
}

    return(
        <Container>
                    <BlockValues>
                        <Paragraph>Depósito <SlArrowUpCircle /></Paragraph>
                        <NewInput id="deposito" type="number"  placeholder="Insira o valor aqui..."/>
                        <NewButton onClick={depositar}>Depositar</NewButton>
                        </BlockValues>
                        <BlockValues>
                        <Paragraph>Saque <SlArrowDownCircle /></Paragraph>
                        <NewInput id="saque" type="number" placeholder="Insira o valor aqui..."/>
                        <NewButton onClick={sacar}>Sacar</NewButton>
                    </BlockValues>
            <BlockSaldo>
                <p>Saldo Atual</p>
                <h1>R${total}</h1>
            </BlockSaldo>
        </Container>
    )
}