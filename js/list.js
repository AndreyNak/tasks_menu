

function addCase(value){
  if (!value) {
      return alert('Введите значение!');
  }
  return showList(value);
}


function flist (value){
    
}

let list = [];

function showList(value) {
  list.unshift('item');
  let i = list.length - 1;
  let content = document.getElementById('content');
  content.innerHTML+= '<p id="'+ i   +'">' + value +
  '<input id="btn' +  i +
  '" type="button" value="x" onclick="deleteCase(this)"></p> ';
  console.log(list);
}

function deleteCase(v) 
{
  let valueBtn = v.id;
  let idP =  valueBtn.substr(-1);
  
  let idCase = document.getElementById(idP);
  idCase.remove();
  list.splice(idCase, 1);
  console.log(idCase.id);
  console.log(list);

}