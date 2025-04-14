const firstNumber = parseFloat(prompt("1-raqamni kiriting"));

const choose = parseFloat(prompt("Tanlang" + "\n1)+" + "\n2)-" + "\n3)*" + "\n4)/"));

const secondNumber = parseFloat(prompt("2-raqamni kiriting"));

let box = 0;



if(choose === 1) {
    box = firstNumber + secondNumber;
}else if(choose === 2) {
    box = firstNumber - secondNumber;        
}else if(choose === 3) {
    box = firstNumber * secondNumber;
}else if(choose === 4) {
    box = firstNumber / secondNumber;
}
else{
    alert("Operatorni noto'g'ri tanladingiz!")
}

box.textContent = "Natija"

document.getElementById("box").textContent += box
document.getElementById("box").style.backgroundColor = "yellow";
document.getElementById("box").style.color = "black";
document.getElementById("box").style.fontSize = "85px";
document.getElementById("box").style.width = "500px";
document.getElementById("box").style.height = "250px";
document.getElementById("box").style.borderRadius = "20px";
document.getElementById("box").style.padding = "20px";
document.getElementById("box").style.cursor = "pointer";





