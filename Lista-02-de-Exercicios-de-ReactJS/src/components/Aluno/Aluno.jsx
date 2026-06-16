function Aluno({ nome, nota }) {
    return (
        <div>
            <p>{nome}</p>
            <p>{nota >= 6 ? "Aprovado" : "Reprovado"}</p>
        </div>
    );
}
export default Aluno;