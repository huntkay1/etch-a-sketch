const container = document.getElementById("container");
let eraseMode = false;

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
            square.style.backgroundColor = 'black';
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
    container.style.backgroundColor = "white";

}


//creates and adds select size button
body = document.querySelector('body');
btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer")
body.appendChild(btnContainer);

sizeBtn = document.createElement("button");
sizeBtn.textContent = "Select Size";
sizeBtn.classList.add("select");
btnContainer.appendChild(sizeBtn);


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
btnContainer.appendChild(clearBtn);

//clears the board when 
clearBtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');
    let squareArray = [...squares]; //change to array
    console.log(squareArray);

    squareArray.forEach((square) => {
        square.style.backgroundColor = "white";
    })

})

eraseBtn = document.createElement("button");
eraseBtn.textContent = "Erase";
eraseBtn.classList.add("erase");
btnContainer.appendChild(eraseBtn);

eraseBtn.addEventListener('click', () => { 
    eraseMode = !eraseMode;

    if (eraseMode) {
        eraseBtn.style.backgroundColor = "gray";
        let squares = document.getElementsByClassName('square');
        let squareArray = [...squares]; //change to array

        squareArray.forEach((square) => {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'white';
            });
        } )
    } else {
        eraseBtn.style.backgroundColor = "transparent";
        let squares = document.getElementsByClassName('square');
        let squareArray = [...squares]; //change to array

        squareArray.forEach((square) => {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'black';
            });
        } )
    }

    
})

initializeGrid();
changeColor();





   





