const container = document.getElementById("container");

function makeGrid(size) {
    let gridSize = size * size;

    for (let i=0; i < gridSize; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('square');

        let gridWidth = container.clientWidth / size + `px`;
        let gridHeight = container.clientHeight / size + `px`;

        gridSquare.style.width = `${gridWidth}`;
        gridSquare.style.height = `${gridWidth}`;
        gridSquare.style.border = "1px green solid";

        container.appendChild(gridSquare);
    }
}

makeGrid(10);