let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = prompt("Digite seu nome de usuário");
    password = prompt("Digite sua senha");

    if (username === "admin" && password === "admin") {
        loggedIn = true;
    } else {
        alert("Usuário ou senha inválidos");
    }
}