const buttons = document.querySelector('.buttons--container');
const time = document.querySelector('.time');
const lightDarkMode = document.querySelector('.day--night');
const result = document.querySelector('.result');

//Make date
const date = new Date();
console.log(date);
time.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

//Animate button on click
const clickAnimation = function (event) {
  event.target.classList.add('click');
  setTimeout(() => {
    event.target.classList.remove('click');
  }, 200);
};

lightDarkMode.addEventListener('click', function (e) {
  const moon = document.querySelector('.fa-moon');
  const sun = document.querySelector('.fa-sun');
  e.target.classList.toggle('highlight');

  if (e.target.classList.contains('fa-moon')) {
    if (sun.classList.contains('highlight')) sun.classList.remove('highlight');
    const black = document.querySelectorAll('.black');
    const alphablack = document.querySelectorAll('.alphaBlack');

    black.forEach((el) => {
      el.classList.remove('black');
      el.classList.add('white');
    });

    alphablack.forEach((el) => {
      el.classList.remove('alphablack');
      el.classList.add('alphaWhite');
    });
    e.target.classList.add('highlight');
    return;
  }

  if (e.target.classList.contains('fa-sun')) {
    if (moon.classList.contains('highlight'))
      moon.classList.remove('highlight');

    const white = document.querySelectorAll('.white');
    const alphaWhite = document.querySelectorAll('.alphaWhite');
    white.forEach((el) => {
      el.classList.remove('white');
      el.classList.add('black');
    });

    alphaWhite.forEach((el) => {
      el.classList.remove('alphaWhite');
      el.classList.add('alphaBlack');
    });
    e.target.classList.add('highlight');
  }
  return;
});

//calculator functions

let oldValue = '';

buttons.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn')) return;

  //get classname to identify which key press
  const classList = e.target.classList.value;
  let n = classList.split(' ');
  let className = n[0];
  console.log(className);
  clickAnimation(e);

  switch (className) {
    case 'cut':
      result.innerHTML = '';
      oldValue = '';
      break;

    case 'num':
      oldValue = oldValue.concat(e.target.innerHTML);
      result.innerHTML = oldValue;
      console.log(typeof oldValue);
      break;

    case 'plus':
      oldValue = oldValue.concat(' ', '+', ' ');
      result.innerHTML = oldValue;
      break;

    case 'minus':
      oldValue = oldValue.concat(' ', '-', ' ');
      result.innerHTML = oldValue;
      break;

    case 'multiply':
      oldValue = oldValue.concat(' ', '*', ' ');
      result.innerHTML = oldValue;
      break;

    case 'divide':
      oldValue = oldValue.concat(' ', '/', ' ');
      result.innerHTML = oldValue;
      break;

    case 'percentage':
      oldValue = oldValue.concat(' ', '%', ' ');
      result.innerHTML = oldValue;
      break;

    case 'backspace':
      oldValue = oldValue.slice(0, -1);
      result.innerHTML = oldValue;
      break;

    case 'equals':
      result.innerHTML = eval(oldValue);
      oldValue = '';
      break;

    case 'cut':
      result.innerHTML = '';
      console.log('inside cut');
      break;
  }
});
