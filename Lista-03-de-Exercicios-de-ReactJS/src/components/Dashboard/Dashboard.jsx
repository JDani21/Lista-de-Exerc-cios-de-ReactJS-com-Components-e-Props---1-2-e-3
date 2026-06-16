function Titulo({ texto }) {
    return <h3 style={{ marginTop: 0 }}>{texto}</h3>;
}
function Status({ mensagem }) {
    return <p>Status atual: <strong>{mensagem}</strong></p>;
}
function CardSimples({ titulo, descricao }) {
    return (
        <div style={{ background: '#f9f9f9', padding: '10px', borderLeft: '4px solid blue', marginBottom: '10px' }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{titulo}</h4>
            <p style={{ margin: 0 }}>{descricao}</p>
        </div>
    );
}
function Dashboard() {
    return (
        <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '10px', marginBottom: '10px' }}>
            <Titulo texto="Dashboard Principal" />
            <Status mensagem="Online" />

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <CardSimples titulo="Usuários" descricao="150 ativos" />
                <CardSimples titulo="Vendas" descricao="R$ 3.200,00 hoje" />
            </div>
        </div>
    );
}

export default Dashboard;