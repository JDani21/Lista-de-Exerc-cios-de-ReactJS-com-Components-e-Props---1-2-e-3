import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil/Perfil';
import fotoPerfil from '../src/assets/fotoPerfil.png';
import CardProduto from './components/CardProduto/CardProduto';
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios';
import Post from './components/Post/Post';
import { Comentario } from './components/Comentario/Comentario';
import CardComImagem from './components/CardComImagem/CardComImagem';
import paisagem from '../src/assets/paisagem.jpg';
import TabelaSimples from './components/TabelaSimples/TabelaSimples';
import Aluno from './components/Aluno/Aluno';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Perfil foto={fotoPerfil} nome="João" email="joao@example.com" />
      <br />
      <CardProduto nome="Camiseta" preco={49.99} descricao="Camiseta de algodão confortável" />
      <br />
      <ListaUsuarios nome="João Silva" idade="20" />
      <ListaUsuarios nome="Maria Souza" idade="25" />
      <ListaUsuarios nome="Ana Costa" idade="47" />
      <ListaUsuarios nome="Lucas Lima" idade="31" />
      <br />
      <Post titulo="Meu Primeiro Post" autor="João Silva" conteudo="Este é o conteúdo do meu primeiro post!" />
      <br />
      <Comentario autor="Maria Souza" mensagem="Ótimo post, João!" />
      <Comentario autor="Ana Costa" mensagem="Gostei muito do seu post!" />
      <br />
      <CardComImagem imagem={paisagem} titulo="Paisagem" texto="Uma bela paisagem para relaxar." />
      <br />
      <TabelaSimples data="21/05" nome="PS5" valor="R$ 3,998,00" />
      <TabelaSimples data="25/03" nome="Controle" valor="R$ 350,99" />
      <TabelaSimples data="28/06" nome="Óculos de Realidade Virtual" valor="R$ 899,99" />
      <br />
      <Aluno nome="Carlos" nota={8} />
      <br />
      <Aluno nome="Ana" nota={5} />
      <br />
      <Aluno nome="Maria" nota={7} />
      <br />
      <Aluno nome="Lucas" nota={4} />
      <br />
      <Menu itens={['Home', 'Sobre', 'Contato']} />
      <br />
      <Layout />
    </>
  );
}

export default App;