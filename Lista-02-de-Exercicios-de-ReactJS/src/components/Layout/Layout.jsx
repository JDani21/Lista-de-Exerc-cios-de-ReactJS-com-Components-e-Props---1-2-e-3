function Header({ titulo }) {
    return <header>{titulo}</header>;
}
function Main({ conteudo }) {
    return <main>{conteudo}</main>;
}
function Footer({ texto }) {
    return <footer>{texto}</footer>;
}
function Layout() {
    return (
        <>
            <Header titulo="Meu Site" />
            <Main conteudo="Conteúdo principal" />
            <Footer texto="Rodapé" />
        </>
    );
}
export default Layout;