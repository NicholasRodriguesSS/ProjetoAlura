function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
let campoPesquisa = document.getElementById("campo-pesquisa").value

//se o campoPesquisa for uma string sem nada
if(!campoPesquisa){
section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()


console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""; 
    
    // Itera sobre cada item de dados (assumindo que 'dados' é um array)
    for (let dado of dados)  
        {
        titulo = dado.titulo.toLowerCase()
        descricao =  dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        //Se no dado.titulo.includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))  
            {
// Cria um novo elemento
resultados += `
<div class="item-resultado">
    <h2>
        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
</div>
`;
        }
        
    }

    if (!resultados) {
        resultados = "<p>Nenhum Atleta foi encontrado</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}




