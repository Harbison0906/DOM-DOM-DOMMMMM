let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');


btn.appendChild(btnText);

window.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(btn);
  let flexDiv = document.createElement('div');
  flexDiv.classList.add('container');
  document.body.appendChild(flexDiv);

});



let counter = 1;

btn.addEventListener('click', function () {

  let div = document.createElement('div');
  div.id = counter;
  div.classList.add('square');
  counter++;
  document.body.appendChild(div);

  div.addEventListener('mouseenter', function () {
    let h2 = document.createElement('h2');
    h2.id = counter;
    let h2Text = document.createTextNode(div.id);
    h2.appendChild(h2Text);
    div.appendChild(h2);
  })

  div.addEventListener('mouseleave', function () {
    var elem = document.getElementById(counter);
    elem.parentNode.removeChild(elem);
  })
});

