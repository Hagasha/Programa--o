function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let allowedChars = '';
    
    allowedChars += (includeLowercase) ? lowercaseChars : '';
    allowedChars += (includeUppercase) ? uppercaseChars : '';
    allowedChars += (includeNumbers) ? numberChars : '';
    allowedChars += (includeSymbols) ? symbolChars : '';

    if (length <= 0) {
        document.getElementById('senhaGerada').innerHTML = 'A senha deve ter pelo menos um caractere';
        return;
    }
    if (allowedChars.length === 0) {
        document.getElementById('senhaGerada').innerHTML = 'A senha deve conter pelo menos um tipo de caractere';
        return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }

    // Exibir a senha gerada no elemento HTML com id 'senhaGerada'
    document.getElementById('senhaGerada').innerHTML = `Senha gerada: ${generatedPassword}`;
}
