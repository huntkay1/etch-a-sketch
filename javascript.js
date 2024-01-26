const container = document.getElementById("container");
let eraseMode = false;
let rainbowMode = false;

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


//Only used for inital display of grid - creates 16x16 grid with white background
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


//creates erase button
eraseBtn = document.createElement("button");
eraseBtn.textContent = "Erase";
eraseBtn.classList.add("erase");
btnContainer.appendChild(eraseBtn);

//turn on the erase function when clicked and turn it off when clicked again
eraseBtn.addEventListener('click', () => { 
    eraseMode = !eraseMode;

    if (eraseMode) {
        eraseBtn.textContent = "Draw";
        let squares = document.getElementsByClassName('square');
        let squareArray = [...squares]; //change to array

        squareArray.forEach((square) => {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'white';
            });
        } )
    } else {
        eraseBtn.textContent = "Erase";
        let squares = document.getElementsByClassName('square');
        let squareArray = [...squares]; //change to array

        squareArray.forEach((square) => {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'black';
            });
        } )
    }
})


//create rainbow mode button
rainbowBtn = document.createElement("button");
rainbowBtn.textContent = "Rainbow Mode";
rainbowBtn.classList.add("rainbow");
btnContainer.appendChild(rainbowBtn);

//Turns on rainbow mode when clicked, choosing a random color each time a square
//is moused over. Turns off when clicked again
rainbowBtn.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
    let squares = document.getElementsByClassName('square');
    let squareArray = [...squares]; //change to array

    if (rainbowMode) {
        rainbowBtn.textContent = "Classic Mode";
        squareArray.forEach((square) => {
            square.addEventListener('mouseenter', () => {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                square.style.backgroundColor = color;
            });
        } )

    } else {
        rainbowBtn.textContent = "Rainbow Mode";
        changeColor(); //essentially goes back to classic mode - black color
    }
})



initializeGrid();
changeColor();





   





