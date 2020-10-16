const Game = {
    name: "Canvas App",
    description: "Azul Game",
    version: "1.0.0",
    author: "Eva",
    bag: new Bag(),
    factories: undefined,
    

    init() {
        console.log('soy función init')
        this.start()
    },

    start() {
        console.log('comienzo el juego')
        console.log('imprimo el total de bag')
        this.totalTilesInTheBag()
        this.factoriesGenerator()

    },

    /* Iniciamos la bolsa del juego inicial:
        100 azulejos -> 20 de cada color (azul, rojo, amarillo, blanco y negro)
        */


    //Calculando las tiles que quedan en la bag
    totalTilesInTheBag() {

        const totalTilesInTheBag = this.bag.tileBlue.number + this.bag.tileYellow.number + this.bag.tileRed.number + this.bag.tileWhite.number + this.bag.tileBlack.number

        document.querySelector('.wallboard-info-text').textContent = totalTilesInTheBag

    },

    /* Generamos las factorias iniciales:
        4 azulejos por cada 1 factoria aleatorio
        */


    //Creación de elementos
    createElement(typeElement, textNodeElement, contentElement) {
            const ele = document.createElement(typeElement)
            const text = document.createTextNode(textNodeElement)
            ele.appendChild(text)
            document.querySelector(contentElement).appendChild(ele)

    },

    factoriesGenerator() {
        this.factories = {}
        for (let i = 0; i < 5; i++) {
            let factory = new Factory()
            let indic = new String('fac'+[i])
            let element = factory.factoryGenerator()
            this.factories[indic] = element
            this.createElement('div', element,  '.wallboard-factories')
        
        console.log(this.factories)

    }

   },
    



}