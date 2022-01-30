function solve() {

  const allSection = document.querySelector('#quizzie');

  let answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let currentAnswer = [];
  let counter = 0;


  allSection.addEventListener('click', onClick);

  function onClick(e) {

    if (e.target.className === 'answer-text') {
      currentAnswer.push(e.target.textContent);

      document.querySelectorAll('section')[counter].style.display = 'none';
      counter++;
      if (counter < 3) {
        document.querySelectorAll('section')[counter].style.display = 'block';

      } else {

        document.querySelector('.results-inner h1').textContent = checkAnswer(answers, currentAnswer);
        document.querySelector('ul#results').style.display = 'block';

      }
    }
  }

  function checkAnswer(answer, currentAnswer) {

    let print = '';

    let result = answer.reduce((a, x) => {
      if(currentAnswer.includes(x)){
         a.push(1);
      }
      return a
    }, []);

    if(result.length > 2) {
      print = "You are recognized as top JavaScript fan!";
    } else {
      print = `You have ${result.reduce((a, x) => a += x, 0)} right answers`;

    }
    return print;

  }
}
