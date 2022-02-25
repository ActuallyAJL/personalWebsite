const buttonOne = () => {
    // console.log ("button one pressed");
    textBox.innerText += "Button One Pressed!";
}

const buttonTwo = () => {
    // console.log ("button two pressed");
    textBox.innerText += "Button Two Pressed!";
}

const buttonThree = () => {
    // console.log ("button three pressed");
    textBox.innerText += "Button Three Pressed!";
}

const buttonOneElem = document.getElementById("button-one");
const buttonTwoElem = document.getElementById("button-two");
const buttonThreeElem = document.getElementById("button-three");
const textBox = document.getElementById("text-output");