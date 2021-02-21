'use strict';

const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//helper functions

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formmat(name){
  let x;
  if(name ==='sweep'){
    x =`img/${name}.png`;
  }
  else if( name ==='usb'){
    x=`img/${name}.gif`;
  }
  else{
    x=`img/${name}.jpg`;
  }
  return x;
}



const rightImage = document.getElementById('right-image');
const middilImage = document.getElementById('middle-image');
const leftImage = document.getElementById('left-image');
const imagesSection=document.getElementById('images-section');



function ShowingImage(name) {
  this.name = name;
  this.path =formmat(this.name);
  this.votes = 0;
  this.views = 0;
  ShowingImage.all.push(this);
}
ShowingImage.all=[];
for(let i=0;i<names.length;i++){
  new ShowingImage(names[i]);
}
function render(){
  const indexRight=randomNumber(0,ShowingImage.all.length-1);
  leftImage.src = ShowingImage.all[indexRight].path;
  leftImage.title = ShowingImage.all[indexRight].name;
  leftImage.alt = ShowingImage.all[indexRight].name;

  const indexMiddil=randomNumber(0,ShowingImage.all.length-1);
  middilImage.src = ShowingImage.all[indexMiddil].path;
  middilImage.title = ShowingImage.all[indexMiddil].name;
  middilImage.alt = ShowingImage.all[indexMiddil].name;

  const indexLeft=randomNumber(0,ShowingImage.all.length-1);
  rightImage.src = ShowingImage.all[indexLeft].path;
  rightImage.title = ShowingImage.all[indexLeft].name;
  rightImage.alt = ShowingImage.all[indexLeft].name;

}
imagesSection.addEventListener('click',handleClick);
let check =0 ;
function handleClick(event) {
  if (event.target.id !== 'images-section') {
    check++;
    for (let i = 0; i < ShowingImage.all.length; i++) {
      if (ShowingImage.all[i].name === event.target.title) {
        ShowingImage.all[i].votes++;
      }
    }
    if (check===5){
      imagesSection.removeEventListener('click',handleClick);
    }
    else{
      render();

    }
  }
}

render();


