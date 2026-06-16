function Alerta({ tipo, mensagem }) {
    const cores = {
        sucesso: "green",
        erro: "red",
        aviso: "orange"
    };
    return (
        <div style={{ color: cores[tipo] }}>
            {mensagem}
        </div>
    );
}
export default Alerta;