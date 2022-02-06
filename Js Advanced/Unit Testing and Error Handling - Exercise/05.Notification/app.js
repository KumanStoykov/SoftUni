function notify(message) {
  const getElementDiv = document.querySelector('#notification');
  getElementDiv.style.display = 'none';
  getElementDiv.style.display = 'block';
  getElementDiv.textContent = message;

  getElementDiv.addEventListener('click', () => {
    getElementDiv.style.display = 'none';
  });
  
}