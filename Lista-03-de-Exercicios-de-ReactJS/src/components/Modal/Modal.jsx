function Modal({ titulo, conteudo, rodape }) {
    return (
        <div>
            <h2>{titulo}</h2>
            <div>{conteudo}</div>
            <footer>{rodape}</footer>
        </div>
    );
}
export default Modal;