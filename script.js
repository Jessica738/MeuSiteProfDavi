// FILMES
let filmes = [

    {
    titulo: "Meninas não choram",
    imagem: "Imagens/MeninasNãoChoram.png",
    descricao: "acompanha Pipa, uma adolescente de 16 anos apaixonada por futebol e craque do time escolar. Sua vida muda drasticamente ao ser diagnosticada com leucemia, enfrentando internações e o tratamento."
    }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "Stranger Things",
    imagem: "Imagens/StrangerThings.png",
    descricao: "Um grupo de crianças enfrenta forças sobrenaturais e experimentos secretos em uma pequena cidade."
    }

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();

