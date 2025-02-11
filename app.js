const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');
const confirmation = document.querySelector('.confirmation');

const yesAnswerMethod = () => {
  question.style.display = 'none';
  confirmation.style.display = 'block';
}

const noAnswerMethod = () => {
  noBtn.style.position = 'absolute';

  const xPosition = Math.floor(Math.random() * wrapper.clientWidth);
  const yPosition = Math.floor(Math.random() * wrapper.clientHeight);

  noBtn.style.left = `${xPosition}px`;
  noBtn.style.top = `${yPosition}px`;

  noBtn.style.left = xPosition >= wrapper.clientWidth / 2 ? `${xPosition - noBtn.clientWidth}px` : `${xPosition}px`;
  noBtn.style.top = yPosition >= wrapper.clientHeight / 2 ? `${yPosition - noBtn.clientHeight}px` : `${yPosition}px`;
}

yesBtn.addEventListener('click', yesAnswerMethod);
noBtn.addEventListener('click', noAnswerMethod);