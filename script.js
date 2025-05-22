const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const alphabetInfo = document.getElementById('alphabetInfo');
alphabetInfo.innerHTML = `<h3>Алфавит: </h3><p>${alphabet.join(' ')}</p>`;
function transformText(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            const offset = index < 26 ? 0 : 26;
            let newIndex = (index - offset + shift + 26) % 26 + offset;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    return result;
}
document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const result = transformText(inputText, 13);
    outputText.innerHTML = result.replace(/\n/g, '<br>');
    alphabetInfo.innerHTML += `
        <p>Операция: Зашифровка</p>
        <p>Исходный текст: ${inputText.replace(/\n/g, '<br>')}</p>
        <p>Итог: ${result.replace(/\n/g, '<br>')}</p>
        <hr>
    `;
});
document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const result = transformText(inputText, -13);
    outputText.innerHTML = result.replace(/\n/g, '<br>');
    alphabetInfo.innerHTML += `
        <p>Операция: Расшифровка</p>
        <p>Исходный текст: ${inputText.replace(/\n/g, '<br>')}</p>
        <p>Итог: ${result.replace(/\n/g, '<br>')}</p>
        <hr>
    `;
});