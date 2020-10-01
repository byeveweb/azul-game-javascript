console.log('hola')


const Game = {
    name: "Canvas App",
    description: "Azul Game",
    version: "1.0.0",
    author: "Eva",
    bag: new Bag(),

    init() {
        console.log('inicializo')
        this.start()
    },

    start() {
        console.log('comienzo el juego')
        console.log('creo las tiles')
        this.bagTiles()

    },

    /* 
    Iniciamos la bolsa del juego inicial:
        100 azulejos -> 20 de cada color (azul, rojo, amarillo, blanco y negro)
        */

    bagTiles() {

        const arrTiles = Object.values(this.bag)
        let totalTiles = 0

        for (let i = 0; i < arrTiles.length; i++) {


            //pintamos los cuadrados
            this.bag.drawTile(arrTiles[i].color, arrTiles[i].number)
            totalTiles = totalTiles += arrTiles[i].number


        }

        document.querySelector('.totalTile').innerHTML = '<p>Total de Azulejos: <span> ' + totalTiles + '</span></p>'

    }


}