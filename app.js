'use strict';

const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//helper functions

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formmat(name) {
  let x;
  if (name === 'sweep') {
    x = `img/${name}.png`;
  }
  else if (name === 'usb') {
    x = `img/${name}.gif`;
  }
  else {
    x = `img/${name}.jpg`;
  }
  return x;
}



const rightImage = document.getElementById('right-image');
const middilImage = document.getElementById('middle-image');
const leftImage = document.getElementById('left-image');
const imagesSection = document.getElementById('images-section');




const articleJava = document.getElementById('htmlArticle');
const listHtml = document.createElement('ul');
articleJava.appendChild(listHtml);






function ShowingImage(name) {
  this.name = name;
  this.path = formmat(this.name);
  this.votes = 0;
  this.views = 0;
  ShowingImage.all.push(this);

}
ShowingImage.all = [];
for (let i = 0; i < names.length; i++) {
  new ShowingImage(names[i]);
}

let unRepeted = [];
function render() {

  // for (let x = 0; x < unRepeted.length; x++) {
  //   if (indexRight===unRepeted[x]) {
  //     indexRight=randomNumber(0,ShowingImage.all.length-1);
  //   }
  // }
  let indexRight = randomNumber(0, ShowingImage.all.length - 1);
  let indexMiddil = randomNumber(0, ShowingImage.all.length - 1);
  let indexLeft = randomNumber(0, ShowingImage.all.length - 1);

  while (unRepeted.includes(indexRight) || (indexRight === indexMiddil || indexRight === indexLeft)) {
    indexRight = randomNumber(0, ShowingImage.all.length - 1);
    console.log('first');
    console.log(unRepeted);
  }

  while (unRepeted.includes(indexMiddil) || (indexMiddil === indexRight || indexMiddil === indexLeft)) {
    indexMiddil = randomNumber(0, ShowingImage.all.length - 1);
    console.log('second');
  }

  while (unRepeted.includes(indexLeft) || (indexLeft === indexMiddil || indexLeft === indexRight)) {
    indexLeft = randomNumber(0, ShowingImage.all.length - 1);
    console.log('last');
  }

  unRepeted=[indexRight,indexMiddil,indexLeft];




  leftImage.src = ShowingImage.all[indexRight].path;
  leftImage.title = ShowingImage.all[indexRight].name;
  leftImage.alt = ShowingImage.all[indexRight].name;

  // while(indexRight===indexMiddil) {
  //   indexMiddil=randomNumber(0,ShowingImage.all.length-1);
  // }
  // for (let x = 0; x < unRepeted.length; x++) {
  //   if (indexMiddil===unRepeted[x] ||indexRight===indexMiddil ) {
  //     indexMiddil=randomNumber(0,ShowingImage.all.length-1);
  //   }
  // }

  middilImage.src = ShowingImage.all[indexMiddil].path;
  middilImage.title = ShowingImage.all[indexMiddil].name;
  middilImage.alt = ShowingImage.all[indexMiddil].name;

  // while(indexRight===indexLeft || indexMiddil===indexLeft){
  //   indexLeft=randomNumber(0,ShowingImage.all.length-1);
  // }
  // for (let x = 0; x < unRepeted.length; x++) {
  //   if (indexLeft===unRepeted[x] || indexRight===indexLeft || indexMiddil===indexLeft ) {
  //     indexLeft=randomNumber(0,ShowingImage.all.length-1);
  //   }
  // }

  rightImage.src = ShowingImage.all[indexLeft].path;
  rightImage.title = ShowingImage.all[indexLeft].name;
  rightImage.alt = ShowingImage.all[indexLeft].name;

  for (let i = 0; i < ShowingImage.all.length; i++) {
    switch (i) {
    case indexRight:
    case indexMiddil:
    case indexLeft:
      ShowingImage.all[i].views++;

      break;

    default:
      break;
    }

  }
  // unRepeted=[indexRight,indexMiddil,indexLeft];

}



function lineWriter() {


  for (let index = 0; index < ShowingImage.all.length; index++) {
    let lineLists = document.createElement('p');
    listHtml.appendChild(lineLists);
    lineLists.textContent = `${ShowingImage.all[index].name} had ${ShowingImage.all[index].votes}
     votes, and was seen ${ShowingImage.all[index].views} times.`;
  }

}





imagesSection.addEventListener('click', handleClick);
let eventRemoval = 0;
function handleClick(event) {
  if (event.target.id !== 'images-section') {
    eventRemoval++;
    for (let i = 0; i < ShowingImage.all.length; i++) {
      if (ShowingImage.all[i].name === event.target.title) {
        ShowingImage.all[i].votes++;
      }
    }
    if (eventRemoval === 25) {
      lineWriter();
      imagesSection.removeEventListener('click', handleClick);
      chartDrawer();
      updateList();

    }
    else {
      render();

    }
  }
}


render();


// llh;
function chartDrawer(){

  const ctx = document.getElementById('myChart').getContext('2d');
  const orderPicName=[];
  const orderData=[];
  const orderViews=[];
  for (let i = 0; i < ShowingImage.all.length; i++) {
    orderPicName.push(ShowingImage.all[i].name);
    orderData.push(ShowingImage.all[i].votes);
    orderViews.push(ShowingImage.all[i].views);
  }




  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: orderPicName,
      datasets: [{
        label: 'Data',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: orderData
      },
      {
        label: 'Views',
        backgroundColor: 'rgb(100, 99, 132)',
        borderColor: 'rgb(100, 99, 132)',
        data: orderViews
      }]
    },

    // Configuration options go here
    options: {
      title: {
        fontColor:'#00eeff',
        display: true,
        text: 'Custom Chart Title',
        fontSize:40},
      legend:{labels: {fontColor: 'black' },
        fontSize:20}
    }
  });
}

function updateList(){
  let listString = JSON.stringify(ShowingImage.all);
  localStorage.setItem('productOrders',listString);
}
function getList(){
  let listString = localStorage.getItem('productOrders');
  if(listString){
    ShowingImage.all = JSON.parse(listString);
  }
}


getList();
