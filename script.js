    const englishAlphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const alphabetLength = 26; 
    const rotShift = 13;
    
    document.getElementById('alphabet').textContent = englishAlphabet.join(' ');
    
    document.getElementById('processBtn').addEventListener('click', function() {
        const inputText = document.getElementById('inputText').value;
        let outputText = '';
        let operation = '';
        
        const isEncrypt = inputText.length % 2 === 0;
        operation = isEncrypt ? 'Encryption ROT13' : 'Decryption ROT13';
        document.getElementById('operation').textContent = operation;
        
        for (let i = 0; i < inputText.length; i++) {
            const char = inputText[i];
            let foundIndex = -1;
            
            for (let j = 0; j < englishAlphabet.length; j++) {
                if (englishAlphabet[j] === char) {
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
                
                outputText += englishAlphabet[newIndex];
            } else {
                outputText += char;
            }
        }
        
        document.getElementById('outputText').value = outputText;
    });