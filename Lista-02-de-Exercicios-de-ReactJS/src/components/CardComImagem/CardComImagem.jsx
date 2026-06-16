function CardComImagem({ imagem, titulo, texto }) {
    return (
        <div>
            <img src={imagem} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    );
}
export default CardComImagem;