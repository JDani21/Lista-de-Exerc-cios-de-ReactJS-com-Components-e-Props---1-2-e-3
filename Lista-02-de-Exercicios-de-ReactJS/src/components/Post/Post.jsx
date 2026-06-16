function Post({ titulo, autor, conteudo }) {
    return (
        <article>
            <h2>{titulo}</h2>
            <p><em>{autor}</em></p>
            <p>{conteudo}</p>
        </article>
    );
}
export default Post;