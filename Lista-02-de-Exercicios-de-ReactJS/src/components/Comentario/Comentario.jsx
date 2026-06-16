function Comentario({ autor, mensagem }) {
    return (
        <div>
            <strong>{autor}</strong>
            <p>{mensagem}</p>
        </div>
    );
}
function ListaComentarios() {
    return (
        <div>
            <Comentario autor="João" mensagem="Muito bom!" />
            <Comentario autor="Ana" mensagem="Gostei!" />
        </div>
    );
}
export { Comentario, ListaComentarios };