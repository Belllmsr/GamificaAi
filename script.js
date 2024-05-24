let menu = document.getElementById("menu") 
let iconeBarras= document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //Menu fechado - tem a classe menu-fechado
    //Menu aberto - não tem a classe menu-fechado

    //alterna a classe "menu-fechado" no menu
    //menu.classList.toggle("menu-fechado")
  
    //Se o menu contem a classe menu-fechado
if(menu.classList.contains("menu-fechado")){
    //Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

//esconder icone barras
iconeBarras.style.display = "none"

//mostrar o icone do x
iconeX.style.display = "inline"

}else{
    //Fechar o menu - adicionar a classe menu-fechado
    menu.classList.add("menu-fechado")

    //esconder icone do x
    iconeX.style.display= "none"

    //mostrar o icone barras
    iconeBarras.style.display = "inline"
}

}

//carrossel

let banner = document.querySelector(".banner")


//let slides = [0, 1, 3,]
//slide [0]-> "primeiro-banner",
//slide [1]-> "segundo-banner",
//slide [2]-> "terceiro-banner",

let slides = [
    "primeiro-banner", //0- 
    "segundo-banner", //1
    "terceiro-banner", //2
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide(){
//Remover o slide anterior
banner.classList.remove(slides[slideAtual])

if(slideAtual < 2){
    //Somar 1 na variavel slideAtual
    slideAtual++

}else{
    //Voltar para o primeiro banner
    slideAtual = 0
}

//Mostrar slide de acordo com o slide atual
banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior(){
    //Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if(slideAtual > 0){
        //Subtrair 1 na variavel slideAtual
        slideAtual--
        
    }else{
        //Voltar para o ultimo slide
        slideAtual = 2
    }

//Mostrar slide de acordo com o slide atual
banner.classList.add(slides[slideAtual])
}
function selecionarSlide(indiceSlide){
    //remove slide atual
    banner.classList.remove(slides[slideAtual])

//atualiza a variavel com o indice de slide selecionado
    slideAtual = indiceSlide

    banner.classList.add(slides[slideAtual])


}

//Carragamento dinamico dos cases
let listaCases = [


]

function renderizarCases(){
    //Encontrar o elemento para inserir os cards
let containerCards = document.querySelector(".container-cards")

//Variavel para guardar o html dos cases montados
let template = ""

    //Para cada case da listaCases
    listaCases.forEach(cardCase =>{
        //Montar o html do card passando os atributos do case
        template += ` <div class="card">
        <img src= ${ cardCase.image} alt="">
        <p> ${ cardCase.descricao }  </p>
        <button>Ver mais</button>
    </div>`

    })

    
    //Inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template
}