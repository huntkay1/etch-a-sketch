const container = document.getElementById("grid");

//Creates the boxes used to build the grid based on the specificed dimensions 
function makeGrid(size) {
    let gridSize = size * size;

    for (let i=0; i < gridSize; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('square');

        //clientHeight includes the padding and border in the container dimensions for proper calcuation
        let squareWidth = container.clientHeight / size + `px`; 
        let squareHeight = container.clientWidth / size + `px`;

        gridSquare.style.width = `${squareWidth}`;
        gridSquare.style.height = `${squareHeight}`;
        

        container.appendChild(gridSquare);
    }
}

makeGrid(20);