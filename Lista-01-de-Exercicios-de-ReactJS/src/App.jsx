import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import Paragrafo from './components/Paragrafo/Paragrafo'
import reactImg from './assets/react.png'
import Imagem from './components/Imagem/Imagem'
import Botao from './components/Botao/Botao'
import Usuario from './components/Usuario/Usuario..jsx'
import Produto from './components/Produto/Produto.jsx'
import Saudacao from './components/Saudacao/Saudacao.jsx'
import CardSimples from './components/CardSimples/CardSimples.jsx'
import Rodape from './components/Rodape/Rodape.jsx'
import Status from './components/Status/Status.jsx'

function App() {
  return (
    <>
      <Titulo texto="Lista de Exercícios React" />
      <br />
      <Paragrafo conteudo="Bem-vindo à lista de exercícios!" />
      <br />
      <Imagem src={reactImg} alt="Descrição da imagem" />
      <br />
      <Botao label="Clique aqui" />
      <br />
      <Usuario nome="João" idade={25} />
      <br />
      <Produto nome="Notebook" preco={3500.0} />
      <br />
      <Saudacao nome="Patrick" />
      <br />
      <CardSimples titulo="Card 1" descricao="Descrição do card 1" />
      <br />
      <Rodape ano={2026} />
      <br />
      <Status mensagem="Status: Online" />
    </>
  );
}

export default App;