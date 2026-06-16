function TabelaGenerica({ colunas, dados }) {
    return (
        <table>
            <thead>
                <tr>
                    {colunas.map((c, i) => <th key={i}>{c}</th>)}
                </tr>
            </thead>
            <tbody>
                {dados.map((linha, i) => (
                    <tr key={i}>
                        {linha.map((item, j) => <td key={j}>{item}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default TabelaGenerica;