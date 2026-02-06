const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const themeToggleBtn = document.getElementById('theme-toggle'); // Get theme toggle button

let currentNumbers = [];

// Theme preference handling
function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
}

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Check for OS-level dark mode preference
    applyTheme('dark');
} else {
    applyTheme('light'); // Default to light mode
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

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
