document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#display").value=" ";
    utterance = new SpeechSynthesisUtterance("AC");
    speechSynthesis.speak(utterance);
})

const backspace = () =>{
    const num=document.querySelector("#display").value.slice(0,-1);
    document.querySelector("#display").value=num;
    utterance = new SpeechSynthesisUtterance("clear");
    speechSynthesis.speak(utterance);
}

const one = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "1";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "1");
    }
}

const two = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "2";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "2");
    }
}

const three = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "3";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "3");
    }
}

const four = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "4";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "4");
    }
}

const five = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "5";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "5");
    }
}

const six = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "6";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "6");
    }
}

const seven = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "7";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "7");
    }
}

const eight = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "8";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "8");
    }
}

const nine = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "9";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "9");
    }
}

const zero = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == "0";
    }
    else {
        speak(document.querySelector("#display").value = document.querySelector("#display").value + "0");
    }
}

const point = () =>{
    if (document.querySelector("#display").value == "") {
        document.querySelector("#display").value == ".";
    }
    else {
        document.querySelector("#display").value = document.querySelector("#display").value + ".";
        utterance = new SpeechSynthesisUtterance("point");
        speechSynthesis.speak(utterance);
    }
}

function speak(x)
{
let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
                
speech.text = x;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
                
window.speechSynthesis.speak(speech);
} 

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
button.addEventListener("click", () => {
    audio.play();
 });
});
