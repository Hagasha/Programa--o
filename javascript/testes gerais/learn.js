sum(displayPage, 3, 3);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}