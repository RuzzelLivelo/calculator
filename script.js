function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '') {
        display.innerText = '';
    }
    display.innerText += value;
}

function calculateResult() {
    // Display fixed message
    document.getElementById('display').innerText = 'Hindi ka nya gusto';
}
