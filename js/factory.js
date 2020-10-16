class Factory {

    constructor() {
        this.colors = ['red', 'blue', 'yellow', 'white', 'black']
        this.tileFactory = []
    }
    
    
    //Función que elegie las tile de forma aleatoria
    tileColorRandom(arr) {
        const tileRandom = Math.floor(Math.random() * arr.length)
        return arr[tileRandom]
    }



    //Function Genera la Factoria
    factoryGenerator() {

        //Genera un array de 4 tiles aleatoriamente
        for (let i = 0; this.tileFactory.length < 4; i++) {
            let tileNext = this.tileColorRandom(this.colors)
            this.tileFactory.push(tileNext)
        }
     return this.tileFactory
    }

}