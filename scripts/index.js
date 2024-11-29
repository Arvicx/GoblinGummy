function carregarCatalogo(){
    var produtos = [
        ["images/itens/Goblin Mockup Verde Catalogo.png","Goblin Gummy Sabor Original 5x","R$11,90"],
        ["images/itens/Goblin Mockup Roxo Catalogo.png","Goblin Gummy Sabor Uva 5x","R$11,90"],
        ["images/itens/Goblin Mockup Vermelho Catalogo.png","Goblin Gummy Sabor Morango 5x","R$11,90"],
        ["images/itens/Goblin Mockup Laranja Catalogo.png","Goblin Gummy Sabor Laranja 5x","R$11,90"],
        ["images/itens/Gummy Verde 10un.png","Goblin Gummy Sabor Original 10x","R$20,90"],
        ["images/itens/Gummy Roxo 10un.png","Goblin Gummy Sabor Uva 10px","R$20,90"],
        ["images/itens/Gummy Vermelho 10un.png","Goblin Gummy Sabor Morango 10px","R$20,90"],
        ["images/itens/Gummy Laranja 10un.png","Goblin Gummy Sabor Laranja 10px","R$20,90"]
    ]
    produtos.forEach(cadaProduto =>{
        document.getElementById('catalogo').innerHTML += `
        <div class ="produto">
            <img id="img-produto" src="${cadaProduto[0]}" alt="">
            <h4 id="content-produto">${cadaProduto[1]}</h4>
            <h3 id="content-produto">${cadaProduto[2]}</h3>

            <button id="button-produto">
                Adicionar
                <img src="images/icons/plus-circle.svg" alt="">
            </button>


        </div>
        `
    })
}

carregarCatalogo()

function carregarInfluencers(){
    var influencers = [
        ["/images/influencers/Alanzokka.jpg", "Alanzoka"],
        ["/images/influencers/Kai-Cenat.jpg", "Kai Cenat"],
        ["/images/influencers/GabiCattuzo.jpg", "Gabi Cattuzzo"]
        
    ]
    influencers.forEach(cadaInfluencer =>{
        document.querySelector('#carrosselInterno').innerHTML += `
        <div class="carousel-item">
            <img src="${cadaInfluencer[0]}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${cadaInfluencer[1]}</h5>
            </div>
        </div>
        `

    })
}

carregarInfluencers()

function carregarMarcas(){
    var marcas = [
        ["/images/marcas/GoldenStateWarriors.png", "Golden State Warriors"],
        ["/images/marcas/twice.jpg", "Twice"],
        ["/images/marcas/ValorantChampions.jpg","Valorant Champions Tournament"]
        ["/images/marcas/PainGaming.png", "Pain Gaming"],
        ["/images/marcas/OrdemParanormal.jpg","Ordem Paranormal RPG"]
        
    ]
    influencers.forEach(cadaMarca =>{
        document.querySelector('#carrosselMarca').innerHTML += `
        <div class="carousel-item">
            <img src="${cadaMarca[0]}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${cadaMarca[1]}</h5>
            </div>
        </div>
        `

    })
}

carregarMarcas()