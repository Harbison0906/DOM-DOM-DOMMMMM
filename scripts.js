let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');

btn.appendChild(btnText);

window.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(btn);
});

let counter = 1

btn.addEventListener('click', function () {
  let div = document.createElement('div.square');
  let h2 = document.createElement('h2');
  let h2Text = document.createTextNode(h2.id);
  h2.id = counter;
  counter++;
  h2.appendChild(h2Text);
  div.appendChild(h2);
  
})