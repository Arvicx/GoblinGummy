function carregarCatalogo(){
    var produtos = [
        ["images/itens/Goblin Mockup Verde Catalogo.png","Goblin Gummy Sabor Original","R$15,00"],
        ["images/itens/Goblin Mockup Roxo Catalogo.png","Goblin Gummy Sabor Uva","R$15,00"],
        ["images/itens/Goblin Mockup Vermelho Catalogo.png","Goblin Gummy Sabor Morango","R$15,00"],
        ["images/itens/Goblin Mockup Laranja Catalogo.png","Goblin Gummy Sabor Laranja","R$15,00"]
    ]
    produtos.forEach(cadaProduto =>{
        document.getElementById('catalogo').innerHTML += `
        <div class ="produto">
            <img id="img-produto" src="${cadaProduto[0]}" alt="">
            <h4 id="content-produto">${cadaProduto[1]}</h4>
            <h3 id="content-produto">${cadaProduto[2]}</h3>

            <button id="button-produto">
                Comprar
                <img src="images/icons/plus-circle.svg" alt="">
            </button>


        </div>
        `
    })
}

carregarCatalogo()

function carregarInfluencers(){
    var influencers = [
        ["/images/influencers/Alanzokka", "Alanzoka"],
        ["/images/influencers/Kai-Cenat.jpg", "Kai Cenat"],
        ["/images/influencers/GabiCattuzo.jpg", "Gabi Cattuzzo"]
        
    ]
    influencers.forEach(cadaInfluencer =>{
        document.querySelector('#carrossel').innerHTML += `
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