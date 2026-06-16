function CardProduto({ nome, preco }) {
    return (
        <div style={{ border: '1px dashed #aaa', padding: '10px', marginBottom: '5px', borderRadius: '4px' }}>
            <strong>{nome}</strong> - R$ {preco}
        </div>
    );
}

function ListaProdutos({ produtos }) {
    return (
        <div>
            {produtos.map((p, index) => (
                <CardProduto key={index} {...p} />
            ))}
        </div>
    );
}

export default ListaProdutos;