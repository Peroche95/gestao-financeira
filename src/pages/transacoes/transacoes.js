import React from "react";
import {Container, Blocks, Onblock } from "./style"

export default function Inicial(){
    return(
        <Container>
            <Blocks>
                <p>Saldo Atual</p>
                <Onblock>
                    <p>Depósito</p>
                    <input id="deposito" placeholder="Insira o valor do depósito aqui..."></input>
                    <p>Saque</p>
                    <input id="saque" placeholder="Insira o valor do saque aqui..."></input>
                </Onblock>
            </Blocks>
            <Blocks>
                <p>Histórico de transações</p>
            </Blocks>
        </Container>
    )
}