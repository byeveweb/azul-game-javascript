console.log(`%c soy el tile`, 'font-weight: 200; color: red; font-size: 12pt')

export default class Tile {

    constructor() {
        this.colors = ['red', 'blue', 'green', 'yellow', 'orange']
        this.tileFactory = []
    }

    //Function for chose the Color Tile Random
    static tileColorRandom(arr) {
        const tileRandom = Math.floor(Math.random() * arr.length)
        console.log(tileRandom)
        return arr[tileRandom]
    }



    //Function for compare the tile if both are same
    static tileComparation(tilePrevius, tileNext) {
        console.log(`primer argumento ${tilePrevius} y segundo ${tileNext}`)
        tilePrevius != tileNext ? addTile(tileNext) : null
    }


    //Function for the add tile 
    static addTile(tileAdd) {
        tileFactory.push(tileAdd)
    }



    //Function Generator the tile for one factory
    tileGenerator() {
        let tilePrevius = ''
        let tileNext = ''

        for (let i = 0; this.tileFactory.length < 4; i++) {
            console.log('---------', this.colors)
            //primer paso
            tileNext = tileColorRandom(this.colors)
            console.log(`primer valor: ${tileNext}`)

            //segundo paso comparamos
            tileComparation(tilePrevius, tileNext)

            //tercero igualamos
            tilePrevius = tileNext
            console.log(`segundo valor: ${tilePrevius} ----------------`)

        }


    }

}
