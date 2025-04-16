
function coletar_nome(){
    let= (document.getElementById('nome01').value);

    let coletar_nome = coletar_nome + coletar_nome;
    document.getElementById('coletar_nome').innerText = coletar_nome;


    let nome01
}

function coletar_preco(){
    let preco = parseFloat(document.getElementById('preco').value);
    return preco;
}
    let quant = parseFloat(document.getElementById('quant').value);



function calculo_total(){
    let preco = parseFloat(document.getElementById('preco').value);
    let quant = parseFloat(document.getElementById('quant').value);
    
    let calculo_total = preco * quant;
    document.getElementById("calculo_total").innerText = calculo_total;

    //if( quant > 10 && <20)
        //let = calculo_total - 5%
        //document.getElementsById('calculo_total').innerText = 'ganhou 5% de desconto';
}