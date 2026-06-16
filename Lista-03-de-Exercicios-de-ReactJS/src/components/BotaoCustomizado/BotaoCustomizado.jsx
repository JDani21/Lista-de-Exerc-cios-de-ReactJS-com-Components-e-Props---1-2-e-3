function BotaoCustomizado({ texto, cor, tamanho }) {
    return (
        <button style={{ backgroundColor: cor, fontSize: tamanho }}>
            {texto}
        </button>
    );
}
export default BotaoCustomizado;