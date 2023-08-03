let colors = [];
let numSquares = 6;
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    setUpModeButtons();
    setUpSquares();    
    reset();
}

function setUpModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            // ternary operator
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        
            reset();
        })
    }
}

function setUpSquares() {
    for(let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}
function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change text to 'New colors' again once play again button is pressed
    resetButton.textContent = "New Colors";
    // get rid of the message displayed after winning the game
    messageDisplay.textContent = "";
    // change colors of squares
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })
// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function() {
    // // generate all new colors
    // colors = generateRandomColors(numSquares);
    // // pick a new random color from array
    // pickedColor = pickColor();
    // // change colorDisplay to match picked color
    // colorDisplay.textContent = pickedColor;
    // // change text to 'New colors' again once play again button is pressed
    // this.textContent = "New Colors";
    // // get rid of the message displayed after winning the game
    // messageDisplay.textContent = "";
    // // change colors of squares
    // for(let i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    reset();
})


function changeColors(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++) {
        // change each color to match given color
            squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make array
    let arr = [];
    // repeat num times
    for(let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256)
    // pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}