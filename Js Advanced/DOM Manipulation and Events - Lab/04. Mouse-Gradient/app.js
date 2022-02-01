function attachGradientEvents() {
    let outputResult = document.querySelector('#result');
    let gradient = document.querySelector('#gradient');

    gradient.addEventListener('mousemove', hover)

    function hover(e) {
        
        outputResult.textContent = `${Math.trunc(e.offsetX / (e.target.clientWidth - 1) * 100)}%`;
    }
}
