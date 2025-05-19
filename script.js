document.addEventListener('DOMContentLoaded', function() {
    const russianAlphabet = [
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 
        'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 
        'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 
        'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 
        'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
    ];
    const alphabetLength = 33;
    const rotShift = 13;
    
    document.getElementById('alphabet').textContent = russianAlphabet.join(' ');
    
    document.getElementById('processBtn').addEventListener('click', function() {
        const inputText = document.getElementById('inputText').value;
        let outputText = '';
        let operation = '';
        
        const isEncrypt = inputText.length % 2 === 0;
        operation = isEncrypt ? 'Шифрование ROT13' : 'Дешифрование ROT13';
        document.getElementById('operation').textContent = operation;
        
        for (let i = 0; i < inputText.length; i++) {
            const char = inputText[i];
            let foundIndex = -1;
            
            for (let j = 0; j < russianAlphabet.length; j++) {
                if (russianAlphabet[j] === char) {
                    foundIndex = j;
                    break;
                }
            }
            
            if (foundIndex >= 0) {
                let newIndex;
                if (isEncrypt) {
                    newIndex = (foundIndex + rotShift) % alphabetLength;
                    if (foundIndex >= alphabetLength) {
                        newIndex += alphabetLength;
                    }
                } else {
                    newIndex = (foundIndex - rotShift) % alphabetLength;
                    if (newIndex < 0) {
                        newIndex += alphabetLength;
                    }
                    if (foundIndex >= alphabetLength) {
                        newIndex += alphabetLength;
                    }
                }
                
                outputText += russianAlphabet[newIndex];
            } else {
                outputText += char;
            }
        }
        
        document.getElementById('outputText').value = outputText;
    });
});