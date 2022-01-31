function solve() {
  let inputText = document.querySelector('#text').value;
  const styleInput = document.querySelector('#naming-convention').value;
  let outputResult = document.querySelector('#result');

  let splitInput = inputText.toLowerCase().split(' ');
  let result = [];

  if (styleInput === 'Camel Case') {
    splitInput.forEach((word, index) => {
      let upperCase = word[0].toUpperCase() + word.slice(1);
      if (index === 0) {
        result.push(word);
      } else {
        result.push(upperCase);
      }
    });
  } else if (styleInput === 'Pascal Case'){
    splitInput.forEach(word => {
      let upperCase = word[0].toUpperCase() + word.slice(1);
      result.push(upperCase);
    });

  } else {
    result.push('Error!');
  }

  outputResult.textContent = result.join('');

}