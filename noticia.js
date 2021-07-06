const API_KEY = 'ef7ad5bdf4484260af3ddf2b43024de3'

function exibeNoticias(){
    let divTela = document.getElementById('tela');
    let texto = '';
    let dados = JSON.parse (this.responseText);
    for(i=0; i < 5; i++){
        console.log(dados)
        let noticia = dados.articles[i];
        texto = texto + `
            <div class="novidade1">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${noticia.toLocaleDateString} - ${noticia.source.name} - ${noticia.author} </span><br>
                <span class="text">
                    ${noticia.content}
                    <a href="${noticia.url}">Leia mais...</a>
                </span>
            </div>
        ` ;
        };
    divTela.innerHTML = texto
}

function aparecerNoticia (){
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=internet&from=2021-05-16&sortBy=publishedAt&apiKey=${API_KEY}`);
    xhr.send ();
}

window.onload = () => {
    aparecerNoticia ();
}
