let fullName;
document.getElementById("mysubmit").onclick = function () {
    fullName = document.getElementById("mytext").value;
    document.getElementById("p1").textContent = `Seu nome é ${fullName}`;
};

let age = 25;
let isMarried = false;
document.getElementById("p2").textContent = `Você tem ${age} anos`;
document.getElementById("p3").textContent = `Você é casado?: ${isMarried}`;