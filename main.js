const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

let currentNumbers = [];

// Theme preference handling
function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    themeToggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
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

function getLottoNumberRange(number) {
    if (number >= 1 && number <= 10) return 1; // Yellow
    if (number >= 11 && number <= 20) return 2; // Blue
    if (number >= 21 && number <= 30) return 3; // Red
    if (number >= 31 && number <= 40) return 4; // Grey
    if (number >= 41 && number <= 45) return 5; // Green
    return 0; // Default or error
}

function generateLottoNumbers() {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    currentNumbers = Array.from(numbers).sort((a, b) => a - b); // Sort numbers for better presentation

    currentNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        numberDiv.setAttribute('data-range', getLottoNumberRange(number)); // Assign data-range attribute
        lottoNumbersContainer.appendChild(numberDiv);
    });
}

generateBtn.addEventListener('click', generateLottoNumbers);

generateLottoNumbers();
