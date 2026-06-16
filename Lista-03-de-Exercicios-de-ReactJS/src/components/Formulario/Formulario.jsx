function Formulario({ titulo, campos }) {
    return (
        <form>
            <h2>{titulo}</h2>
            {campos.map((campo, index) => (
                <input key={index} placeholder={campo} />
            ))}
        </form>
    );
}
export default Formulario;