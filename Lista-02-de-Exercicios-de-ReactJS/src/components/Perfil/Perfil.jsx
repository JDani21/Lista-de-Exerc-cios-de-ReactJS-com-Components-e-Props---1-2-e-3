function Perfil({ nome, email, foto }) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h3>{nome}</h3>
            <p>{email}</p>
        </div>
    );
}

export default Perfil;