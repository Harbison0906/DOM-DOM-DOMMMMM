window.addEventListener('DOMContentLoaded', function () {

  let btn = document.createElement('button');
  let btnText = document.createTextNode('Add Square');

  btn.appendChild(btnText);
  document.body.appendChild(btn);

  let flexDiv = document.createElement('div');
  flexDiv.classList.add('container');
  document.body.appendChild(flexDiv);


  let counter = 1;

  btn.addEventListener('click', function () {
    let div = document.createElement('div');
    div.id = counter;
    div.classList.add('square');
    counter++;

    flexDiv.appendChild(div);



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

    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966'];

    div.addEventListener('click', function () {
      div.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    });

    div.addEventListener('dblclick', function () {
      // console.log(div.id);
      // console.log(div.previousSibling);
      if (div.id % 2 === 0) {
        if (div.nextSibling === null) {
          alert('There is nothing after this square');
        } else {
          flexDiv.removeChild(div.nextSibling);
        }
        console.log('even');
      } else {
        if (div.previousSibling === null) {
          alert('There is nothing before this square');
        } else {
          console.log('odd');
          flexDiv.removeChild(div.previousSibling);
        }
      }
    })

  });

});
