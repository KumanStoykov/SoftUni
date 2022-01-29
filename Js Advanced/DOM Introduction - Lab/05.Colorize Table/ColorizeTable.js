function colorize() {
    const gettableRow = document.querySelectorAll('tr:nth-child(2n)');

    Array.from(gettableRow).forEach(row => row.style.backgroundColor = 'Teal');
    
}