'use strict';
const moveButton = document.getElementById('movebutton');
const next2El = document.getElementById('next2');
let clicksCounter=0;

next2El.classList.add('hidden');    


moveButton.addEventListener('click', () => {
  clicksCounter++;
  switch (clicksCounter) {
    case 1:
      moveButton.classList.add('click1');    
      break;
    case 2:
      moveButton.classList.remove('click1');
      moveButton.classList.add('click2');    
      break;
    case 3:
      moveButton.classList.remove('click2');
      moveButton.classList.add('click3');    
      break;
    case 4:
      moveButton.classList.remove('click3');
      moveButton.classList.add('click4');    
      break;
    case 5:
      moveButton.classList.remove('click4');
      moveButton.classList.add('hidden');
      next2El.classList.add('bigNext2');
      next2El.classList.remove('hidden');    
  
      clicksCounter=0;  
      break;
    default:
  }
  // moveButton.classList.add('click1'); 
  console.log(clicksCounter);
});
