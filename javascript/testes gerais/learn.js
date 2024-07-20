function combineString(...strings) {
    return strings.join(' ');
}

const fullName = combineString('Mr.', 'John', 'Doe');
console.log(fullName);