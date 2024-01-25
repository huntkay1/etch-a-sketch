const container = document.getElementById("grid");

//Creates the boxes used to build the grid based on the specificed dimensions 
function makeGrid(size) {
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

function changeColor() {

    let squares = document.getElementsByClassName('square');
    let squareArray = [...squares]; //change 

    squareArray.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'purple';
        });
    } )

}





