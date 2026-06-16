import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import ListaProdutos from './components/ListaProdutos/ListaProdutos'
import BotaoCustomizado from './components/BotaoCustomizado/BotaoCustomizado'
import Alerta from './components/Alerta/Alerta'
import TabelaGenerica from './components/TabelaGenerica/TabelaGenerica'
import Modal from './components/Modal/Modal'
import Dashboard from './components/Dashboard/Dashboard'
import Formulario from './components/Formulario/Formulario'
import ListaFiltrada from './components/ListaFiltrada/ListaFiltrada'
import PaginaDinamica from './components/PaginaDinamica/PaginaDinamica'

function App() {
  return (
    <>
      <Card>
        <h2>Título do meu Card</h2>
        <p>Este é o conteúdo interno que o props.children vai renderizar.</p>
        <button>Ação</button>
      </Card>
      <br />
      <ListaProdutos produtos={[
        { nome: 'Camiseta', preco: 29.99 },
        { nome: 'Calça Jeans', preco: 79.99 },
        { nome: 'Tênis', preco: 149.99 }
      ]} />
      <br />
      <BotaoCustomizado texto="Clique Aqui" cor="#4CAF50" tamanho="16px" />
      <br />
      <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
      <Alerta tipo="erro" mensagem="Ocorreu um erro ao processar sua solicitação." />
      <Alerta tipo="aviso" mensagem="Atenção: Verifique os dados inseridos." />
      <br />
      <TabelaGenerica
        colunas={['ID', 'Nome', 'Idade']}
        dados={[
          [1, 'Alice', 30],
          [2, 'Bob', 25],
          [3, 'Charlie', 35]
        ]}
      />
      <br />
      <Modal
        titulo="Título do Modal"
        conteudo="Este é o conteúdo do modal. Você pode colocar qualquer coisa aqui."
        rodape={<button>Fechar</button>}
      />
      <br />
      <Dashboard />
      <br />
      <Formulario
        titulo="Formulário de Cadastro"
        campos={['Nome', 'Email', 'Senha']}
      />
      <br />
      <ListaFiltrada
        itens={['Maçã', 'Banana', 'Laranja', 'Uva']}
        filtro="Banana"
      />
      <br />
      <PaginaDinamica
        titulo="Página Dinâmica"
        conteudo="Este conteúdo é dinâmico e pode ser alterado conforme necessário."
      />
    </>
  )
}
export default App
