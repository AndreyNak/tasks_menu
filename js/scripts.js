function dna(){
  let pElem  = document.getElementById('dnaAnswer');
  let result = "";
  let elem = document.formDNA.DNA.value.toUpperCase();
  let array = elem.split(/(?=[A-Z])/);
  
  if (!array) {
    return pElem.innerText = 'Введите значения';
  } else {
    for (let index = 0; index < array.length; index++) {
      element = array[index];
      console.log(element);
      
      if (element == 'G') {
        element = 'C';
      }else if (element == 'C') {
        element = 'G';
      }else if (element == 'T') {
        element = 'A';
      }else if (element == 'A') {
        element = 'U';
      }else {
        return  pElem.innerText = 'Введите корректное значение';
      } 
      result+=element;
    }
    if (result) {
      return pElem.innerText = result;
    }      
  }  
};

function isPalindrome(str){
  let pElem  = document.getElementById('palAnswer');
  if (str === " ")
    return pElem.innerText = false + " - Не палиндром !";
  str = str.toLowerCase();
  if(str.length === 1)
    return  pElem.innerText = true + " - Палиндром !";
  if(str.length === 2) 
    return str[0] === str[1];
  if(str[0] === str.slice(-1)) 
    return isPalindrome(str.slice(1,-1))
  return pElem.innerText = false + " - Не палиндром !";
}


function substr(text,num = 0, len = text.length) {
  let pElem  = document.getElementById('subStrAnswer');
  let result = '';
  if (num > text.length-1){
    return pElem.innerText = result;
  }
  text = text.slice(num,text.length);
  for (let index = 0 ; index < len; index++){
    if (text[index] === undefined){
      continue;
    }
    result+=text[index];
   
  }
  if (result === '')
    return '';
   return pElem.innerText = result;
 }