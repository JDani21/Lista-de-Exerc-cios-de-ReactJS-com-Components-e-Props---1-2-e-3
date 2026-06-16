function ListaFiltrada({ itens, filtro }) {
    return (
        <ul>
            {itens.filter(i => i.includes(filtro)).map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default ListaFiltrada;