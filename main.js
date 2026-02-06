const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

let currentNumbers = [];

function generateLottoNumbers() {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    currentNumbers = Array.from(numbers);

    currentNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        lottoNumbersContainer.appendChild(numberDiv);
    });
}

function copyNumbersToClipboard() {
    if (currentNumbers.length === 0) {
        alert('Please generate numbers first!');
        return;
    }

    const numbersString = currentNumbers.join(', ');
    navigator.clipboard.writeText(numbersString)
        .then(() => {
            alert('Numbers copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy numbers: ', err);
            alert('Failed to copy numbers. Please check browser permissions.');
        });
}

generateBtn.addEventListener('click', generateLottoNumbers);
copyBtn.addEventListener('click', copyNumbersToClipboard);

generateLottoNumbers();
