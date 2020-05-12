// Allow the user to resize box elements from integer input,
// Allow them to change the color of said box elements based off of checkboxes,
// Allow them to reorder the checkbox position based off of input
// Visual Representation of event bubbling
// Create a list that can be added to and have elements removed from it, as well as being able to move elements up and down the buttons

    /* So far our program listens to the page and alters the colors of the elements in the box depending on user input.
        It looks very cluttered, so I will try to clean it later. 

        CLEANING

        First I created a function that takes 3 parameters. A button, a form, and a target, and then makes the target take on the color of the 
        color put into the form when the button is clicked. 

        Second, I will need to do the same thing but for resets. 

        Next, I need to create an attribute selector that returns an array of all buttons, one for all forms, and one for all targets
        and cycles through them automatically, so that the function doesn't need called repeatedly. 

    */
// Variables

let blueOne = '#000730';
let blueTwo = '#00bfff';
let blueThree = '#0037ff';
let blueFour = '#3247ff';

let expanderBool = false;


// QUERY SELECTORS

// Color Scheme Selectors
const redInput = document.getElementById('red');
const blueInput = document.getElementById('blue');
const greenInput = document.getElementById('green');
const blackInput = document.getElementById('black');
const whiteInput = document.getElementById('white');

// Expander Selectors

const expandArrow = document.querySelector('.fas');
const colorInput = document.querySelector('.colorInput');
const colorInputSelectors = document.querySelectorAll('.colorInput input');
const colorInputLabels = document.querySelectorAll('.colorInput label');

// Box Color Selectors
    //Box One
const backgroundInputOne = document.getElementById('backgroundInputOne');
const buttonOne = document.getElementById('buttonOne');
const boxOne = document.getElementById('boxOne');
const resetOne = document.getElementById('resetOne');
const resetColorOne = document.querySelector('.boxContainer > div:nth-child(4n + 1)');

    // Box Two
const backgroundInputTwo = document.getElementById('backgroundInputTwo');
const buttonTwo = document.getElementById('buttonTwo');
const boxTwo = document.getElementById('boxTwo');
const resetTwo = document.getElementById('resetTwo');
const resetColorTwo = document.querySelector('.boxContainer > div:nth-child(4n + 2)');

    // Box Three
const backgroundInputThree = document.getElementById('backgroundInputThree');
const buttonThree = document.getElementById('buttonThree');
const boxThree = document.getElementById('boxThree');
const resetThree= document.getElementById('resetThree');
const resetColorThree = document.querySelector('.boxContainer > div:nth-child(4n + 3)');

    // Box Four
const backgroundInputFour = document.getElementById('backgroundInputFour');
const buttonFour = document.getElementById('buttonFour');
const boxFour = document.getElementById('boxFour');
const resetFour = document.getElementById('resetFour');
const resetColorFour = document.querySelector('.boxContainer > div:nth-child(4n + 4)');

// FUNCTIONS 

function changeBoxColor(targetButton, targetBox, targetForm){
    targetButton.addEventListener('click', () =>{
        targetBox.style.backgroundColor = targetForm.value;
        targetForm.value = '';
    });
};

function arraySortOn(array){
    let i = 0;
    do {
    array[i].style.display= 'flex';
    i++;
    expanderBool = true;
    }
    while(i < array.length)
}

function arraySortOff(array){
    let i = 0;
    do {
    array[i].style.display= 'none';
    i++;
    expanderBool = false;
    }
    while(i < array.length)
}

//Expander

expandArrow.addEventListener('click', () =>{
    arraySortOn(colorInputSelectors);
    arraySortOn(colorInputLabels);
    console.log(expanderBool);
});
 


// Color Inputs
changeBoxColor(buttonOne, boxOne, backgroundInputOne);
changeBoxColor(buttonTwo, boxTwo, backgroundInputTwo);
changeBoxColor(buttonThree, boxThree, backgroundInputThree);
changeBoxColor(buttonFour, boxFour, backgroundInputFour);


resetOne.addEventListener('click', () =>{
    resetColorOne.value = blueOne;
    boxOne.style.backgroundColor = resetColorOne.value;
});


resetTwo.addEventListener('click', () =>{
    resetColorTwo.value = blueTwo;
    boxTwo.style.backgroundColor = resetColorTwo.value;
});

resetThree.addEventListener('click', () =>{
    resetColorThree.value = blueThree;
    boxThree.style.backgroundColor = resetColorThree.value;
});

resetFour.addEventListener('click', () =>{
    resetColorFour.value = blueFour;
    boxFour.style.backgroundColor = resetColorFour.value;

});