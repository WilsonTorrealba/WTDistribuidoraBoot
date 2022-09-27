async function injectContent() {
    let url = location.href; 
    //pega o endereço da url

    file = url.split('='); 
    // divide o endereço pelo = e aplica os valores com array

    let view = (file[1] != undefined) ? file[1] : 'inicio';

    const resp = await fetch(`views/${view}.html`); 
    // pega o valor após o = da url e aplica no fetch
    // o metodo fetch faz uma requisição ajax para um determinado local, neste caso para viws/arquivo.html
    
    const html = await resp.text(); 
    // converte o resultado da fetch para o texto
    
    let inject = document.getElementById('content'); 
    // seleciona o destino para carregar o arquivo
    
    inject.innerHTML =html; //aplica a injeção de conteudo do container de destino
}

function activeLink(){
    let url = location.href;
    let view = url.split('=');
    let sessao = (view[1] != undifined) ? view[1] : 'inicio';
    document.getElementById(sessao).className += ' active';
}

injectContent();
activeLink();
