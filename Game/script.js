const num = Math.ceil(Math.random() * 10);
console.log(num);
 const guessNum = prompt('сколько раз крутим барабан?');
 if (guessNum == num) {
   alert('Убит')
   console.log('Убит');
 }
  else{
    alert('Выжил')
   console.log('Выжил');
  }