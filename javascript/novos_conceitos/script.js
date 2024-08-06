// trocar 2 elementos de um arranjo

const colors = ["red", "green", "blue", "yellow", "pink"];

[colors[4], colors[0]] = [colors[0], colors[4]];
console.table(colors);