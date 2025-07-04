function calculo_total() {
    // Obtém os valores inseridos no formulário
    let nome = document.getElementById('nome').value.trim(); // Remove espaços
    let preco = parseFloat(document.getElementById('preco').value); // Converte para número
    let quant = parseInt(document.getElementById('quant').value);   // Converte para inteiro

    // Valida se o nome foi preenchido
    if (nome === '') {
        alert('Por favor, informe o nome do cliente.');
        return;
    }

    // Valida o preço unitário
    if (isNaN(preco) || preco <= 0) {
        alert('Por favor, informe um preço unitário válido maior que zero.');
        return;
    }

    // Valida a quantidade
    if (isNaN(quant) || quant <= 0) {
        alert('Por favor, informe uma quantidade válida maior que zero.');
        return;
    }

    // Calcula o valor total sem desconto
    let total = preco * quant;

    // Inicializa o desconto
    let desconto = 0;

    // Aplica desconto progressivo com base na quantidade
    if (quant >= 30) {
        desconto = 0.15; // 15%
    } else if (quant >= 20) {
        desconto = 0.10; // 10%
    } else if (quant >= 10) {
        desconto = 0.05; // 5%
    }

    // Calcula o valor do desconto
    let valorDesconto = total * desconto;

    // Subtrai o desconto do total
    let valor_com_desconto = total - valorDesconto;

    // Formata os valores para reais (R$)
    let valorFormatado = valor_com_desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let descontoFormatado = valorDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Cria a mensagem de desconto, se houver
    let mensagemDesconto = desconto > 0 
        ? ` (Desconto de ${desconto * 100}% = ${descontoFormatado})`
        : '';

    // Exibe o resultado na tela, com quebra de linha
    document.getElementById('calculo_total').innerText = 
        `Cliente: ${nome}\nTotal: ${valorFormatado}${mensagemDesconto}`;
}
