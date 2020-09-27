class Bag {
    constructor() {
        this.tileBlue = {
            color: 'blue',
            number: 20
        };
        this.tileRed = {
            color: 'red',
            number: 20
        };
        this.tileYellow = {
            color: 'yellow',
            number: 20
        };
        this.tileWhite = {
            color: 'white',
            number: 20
        };
        this.tileBlack = {
            color: 'black',
            number: 20
        }
    }



    drawTile(color) {

        //creamos el nodo para la tile
        const bagTileBoard = document.createElement('div')
        bagTileBoard.classList.add('tile', color)
        const bagTileText = document.createElement('span')

        //cramos el contenido
        const content = document.createTextNode(this.tileBlue.number)

        //insertamos el contenido
        bagTileText.appendChild(content)

        //insertamos el nuevo elemento
        document.querySelector('.bagWallBoard').appendChild(bagTileBoard);
        document.querySelector('.bagWallBoard').appendChild(bagTileText);

    }

}