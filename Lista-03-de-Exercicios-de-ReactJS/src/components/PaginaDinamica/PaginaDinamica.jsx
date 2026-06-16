import React from 'react';

function PaginaDinamica({ titulo, conteudo, rodape }) {
    return (
        <div style={{ border: '3px solid purple', padding: '20px', borderRadius: '10px' }}>
            <header style={{ borderBottom: '2px solid purple', paddingBottom: '10px' }}>
                <h1 style={{ margin: 0 }}>{titulo}</h1>
            </header>

            <main style={{ padding: '20px 0', minHeight: '100px' }}>
                {conteudo}
            </main>

            <footer style={{ borderTop: '2px solid purple', paddingTop: '10px', textAlign: 'center', fontSize: '14px' }}>
                {rodape}
            </footer>
        </div>
    );
}

export default PaginaDinamica;