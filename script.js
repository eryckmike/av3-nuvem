const API_URL = 'http://localhost:3000';

async function carregarProdutos() {
    const response = await fetch(`${API_URL}/produtos`);
    const produtos = await response.json();
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = produtos.map(p => `
        <div>
            ${p.nome} - R$ ${p.preco}
            <button onclick="editarProduto(${p.id})">Editar</button>
            <button onclick="deletarProduto(${p.id})">Deletar</button>
        </div>
    `).join('');
}

async function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    await fetch(`${API_URL}/produtos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, preco })
    });
    carregarProdutos();
}

async function editarProduto(id) {
    // Implementar lógica de edição
}

async function deletarProduto(id) {
    await fetch(`${API_URL}/produtos/${id}`, { method: 'DELETE' });
    carregarProdutos();
}

carregarProdutos();