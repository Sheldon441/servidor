const dados = [
  { id: 1, nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
  { id: 2, nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
  { id: 3, nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
];

function processarRequisicao(requisicao) {
    const { acao, pergunta, resposta } = requisicao;

    switch (acao) {
        case 'CONSULTAR':
            return dados.find(d => d.pergunta.toLowerCase() === pergunta.toLowerCase()) || { mensagem: "Pergunta não encontrada." };

        case 'LISTAR':
            return dados;

        case 'ADICIONAR':
            const novaPergunta = { id: dados.length + 1, pergunta, resposta };
            dados.push(novaPergunta);
            return { mensagem: "Pergunta adicionada com sucesso.", dado: novaPergunta };

        default:
            return { mensagem: "Ação inválida." };
    }
}

module.exports = { processarRequisicao };
