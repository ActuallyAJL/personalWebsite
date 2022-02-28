const buttonOne = () => {
    // console.log ("button one pressed");
    textBox.innerHTML += "Button One Pressed! <br>";
}

const buttonTwo = () => {
    // console.log ("button two pressed");
    textBox.innerHTML += "Button Two Pressed! <br>";
}

const buttonThree = () => {
    // console.log ("button three pressed");
    textBox.innerHTML += "Button Three Pressed! <br>";
}

const buttonOneElem = document.querySelector("#button-one");
const buttonTwoElem = document.querySelector("#button-two");
const buttonThreeElem = document.querySelector("#button-three");
const textBox = document.querySelector("#terminal-output");