function TabelaSimples(props) {
    return (
        <>
            <ul>
                <li>{props.data} {props.nome} {props.valor}</li>
            </ul>
        </>
    )
}

export default TabelaSimples