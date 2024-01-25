const container = document.getElementById("container");

//Creates the boxes used to build the grid based on the specificed dimensions 
function makeGrid(size) {

    //resets the grid
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    };

    let gridSize = size * size;
    let fragment = document.createDocumentFragment(); //holds the squares in a fragment to help performance

    for (let i=0; i < gridSize; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('square');

        //clientHeight includes the padding and border of the container to calculate proper square dimensions
        let squareWidth = container.clientHeight / size + `px`; 
        let squareHeight = container.clientWidth / size + `px`;

        gridSquare.style.width = `${squareWidth}`;
        gridSquare.style.height = `${squareHeight}`;
        

        fragment.appendChild(gridSquare);
    }

    container.appendChild(fragment); //adds the squares fragment 
    
}

//changes the color of the square when moused over
function changeColor() {

    let squares = document.getElementsByClassName('square');
    let squareArray = [...squares]; //change to array

    squareArray.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'purple';
        });
    } )

}

//initializes the grid so that it first displays with 16 squares. Same function as makeGrid
function initializeGrid() {
    let size = 16;
    let gridSize = size * size;
    let fragment = document.createDocumentFragment(); //holds the squares in a fragment to help performance

    for (let i=0; i < gridSize; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('square');

        //clientHeight includes the padding and border of the container to calculate proper square dimensions
        let squareWidth = container.clientHeight / size + `px`; 
        let squareHeight = container.clientWidth / size + `px`;

        gridSquare.style.width = `${squareWidth}`;
        gridSquare.style.height = `${squareHeight}`;
        

        fragment.appendChild(gridSquare);
    }

    container.appendChild(fragment); //adds the squares fragment 

}


//creates and adds select size button
body = document.querySelector('body');
sizeBtn = document.createElement("button");
sizeBtn.textContent = "Select Size";
sizeBtn.classList.add("select");
body.appendChild(sizeBtn);


//allows user to choose dimensions
sizeBtn.addEventListener('click', () => {
    gridSize = prompt("Please specify a dimension number: "); 

    while (gridSize > 100) {
        gridSize = prompt("Please enter a number less than 100: ")
    };

    makeGrid(gridSize);
    changeColor();
})


//creates and adds clear button
clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.classList.add("clear");
body.appendChild(clearBtn);

//clears the board 
clearBtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');
    let squareArray = [...squares]; //change to array
    console.log(squareArray);

    squareArray.forEach((square) => {
        square.style.backgroundColor = "white";
    })

})

initializeGrid();
changeColor();





   





