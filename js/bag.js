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

  


    // drawTileColumn() {
    //     const divParent = document.createElement('div')
    //     divParent.classList.add('tile-column')
    //     document.querySelector('.bag-wall-board').appendChild(divParent);
    //     console.log(divParent)
    // }

    // drawTile(color, numbers) {

    //     this.drawTileColumn()

    //     //creamos el cuadro del tile y el texto
    //     const bagTileBoard = document.createElement('div')
    //     bagTileBoard.classList.add('tile', color)
    //     const bagTileText = document.createElement('p')
    //     bagTileText.classList.add('text-tile')
    //     const bagTileTextNumber = document.createElement('span')

    //     //cramos el contenido
    //     const content = document.createTextNode(numbers)
    //     const contentNumber = document.createTextNode(color)

    //     //insertamos el contenido
    //     bagTileText.appendChild(content)
    //     bagTileTextNumber.appendChild(contentNumber)
    //     console.log(bagTileTextNumber, bagTileText, bagTileBoard)

    //     //insertamos el nuevo elemento
    //     document.querySelector('.tile-colum').appendChild(bagTileBoard);
    //     document.querySelector('.tile-colum').appendChild(bagTileText);
    //     document.querySelector('.tile-colum').appendChild(bagTileTextNumber);

    // }

}