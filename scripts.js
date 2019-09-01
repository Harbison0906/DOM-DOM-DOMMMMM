let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');

btn.appendChild(btnText);

window.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(btn);
});


let counter = 1;

btn.addEventListener('click', function () {
  let div = document.createElement('div');
  div.classList.add('square');
  let h2 = document.createElement('h2');
  h2.id = counter;
  let h2Text = document.createTextNode(h2.id);
  counter++;
  h2.appendChild(h2Text);
  div.appendChild(h2);
  document.body.appendChild(div);
  console.log(counter);
})