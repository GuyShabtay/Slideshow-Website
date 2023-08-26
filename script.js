'use strict';
const moveButtonNext = document.getElementById('moveButtonNext');
const next2El = document.getElementById('next2');
const moveButtonPrev = document.getElementById('moveButtonPrev');
const prev2El = document.getElementById('prev2');
let nextClicksCounter=0;
let prevClicksCounter=0; 
let squareClicksCounter=0; 
const squareButtonPrev = document.getElementById('squareButtonPrev');
const prev3El = document.getElementById('prev3');




next2El.classList.add('hidden');    
prev2El.classList.add('hidden');    
 prev3El.classList.add('hidden');    


moveButtonNext.addEventListener('click', () => {
  nextClicksCounter++;
  switch (nextClicksCounter) {
    case 1:
      moveButtonNext.classList.add('clickNext1');
      moveButtonNext.textContent = "Oops!";
    
      break;
    case 2:
      moveButtonNext.classList.remove('clickNext1');
      moveButtonNext.classList.add('clickNext2');  
      moveButtonNext.textContent = "Miss me..";
  
      break;
    case 3:
      moveButtonNext.classList.remove('clickNext');
      moveButtonNext.classList.add('clickNext3'); 
      moveButtonNext.textContent = "I'm over here";
   
      break;
    case 4:
      moveButtonNext.classList.remove('clickNext4');
      moveButtonNext.classList.add('clickNext4'); 
      moveButtonNext.textContent = "Ok, no more fooling around!";
   
      break;
    case 5:
      moveButtonNext.classList.remove('clickNext');
      moveButtonNext.classList.add('hidden');
      next2El.classList.add('bigNext2');
      next2El.classList.remove('hidden');
      nextClicksCounter=0;  
      break;
    default:
  }
});

moveButtonPrev.addEventListener('click', () => {
  prevClicksCounter++;
  switch (prevClicksCounter) {
    case 1:
      moveButtonPrev.classList.add('clickPrev1');
      moveButtonPrev.textContent = "Did you really think it would be that easy?!";
    
      break;
    case 2:
      moveButtonPrev.classList.remove('clickPrev1');
      moveButtonPrev.classList.add('clickPrev2');  
      moveButtonPrev.textContent = "You have a huge button in the middle of the screen and you still chose to click on me";
  
      break;
    case 3:
      moveButtonPrev.classList.remove('clickPrev2');
      moveButtonPrev.classList.add('clickPrev3'); 
      moveButtonPrev.textContent = "You are determined, and I'm bored we are a good match!";
   
      break;
    case 4:
      moveButtonPrev.classList.remove('clickPrev3');
      moveButtonPrev.classList.add('clickPrev4'); 
      moveButtonPrev.textContent = "Not giving up huh? Alright, you won.. See you in the next project!";
   
      break;
    case 5:
      moveButtonPrev.classList.remove('clickPrev4');
      moveButtonPrev.classList.add('hidden');
      prev2El.classList.add('prev2');
      prev2El.classList.remove('hidden');
    
  
      prevClicksCounter=0;  
      break;
    default:
  }
});
squareButtonPrev.addEventListener('click', () => {
  squareClicksCounter++;
  console.log(squareClicksCounter);
  
  switch (squareClicksCounter) {
    case 1:
      squareButtonPrev.classList.add('clickPrevSquare');
      squareButtonPrev.textContent = "What is the language of the squares? Cuban.";
    
      break;
    case 2:
      squareButtonPrev.classList.remove('clickPrevSquare');
      squareButtonPrev.classList.add('hidden');  
      prev3El.classList.remove('hidden');  
  
      break;
    default:
  }
  
});
