// let unRepeted=0;
// let unMepeted=0;
// let unLepeted=0;
// function render(){
//   let indexRight=randomNumber(0,ShowingImage.all.length-1);
//   let indexMiddil=randomNumber(0,ShowingImage.all.length-1);
//   let indexLeft=randomNumber(0,ShowingImage.all.length-1);


//   while(unRepeted===indexRight || unRepeted===indexMiddil || unRepeted===indexLeft){
//     indexRight=randomNumber(0,ShowingImage.all.length-1);
//   }
//   unRepeted===indexRight;

//   leftImage.src = ShowingImage.all[indexRight].path;
//   leftImage.title = ShowingImage.all[indexRight].name;
//   leftImage.alt = ShowingImage.all[indexRight].name;

//   while(indexRight===indexMiddil || unLepeted===indexRight || unLepeted===indexMiddil || unLepeted===indexLeft ) {
//     indexMiddil=randomNumber(0,ShowingImage.all.length-1);
//   }
//   unLepeted=indexMiddil;

//   middilImage.src = ShowingImage.all[indexMiddil].path;
//   middilImage.title = ShowingImage.all[indexMiddil].name;
//   middilImage.alt = ShowingImage.all[indexMiddil].name;

//   while(indexRight===indexLeft || indexMiddil===indexLeft || unMepeted===indexRight || unMepeted===indexMiddil || unMepeted===indexLeft){
//     indexLeft=randomNumber(0,ShowingImage.all.length-1);
//   }
//   unMepeted=indexLeft;
//   rightImage.src = ShowingImage.all[indexLeft].path;
//   rightImage.title = ShowingImage.all[indexLeft].name;
//   rightImage.alt = ShowingImage.all[indexLeft].name;

//   for (let i = 0; i < ShowingImage.all.length; i++) {
//     switch (i) {
//     case indexRight:
//     case indexMiddil:
//     case indexLeft:
//       ShowingImage.all[i].views++;

//       break;

//     default:
//       break;
//     }

//   }

// }



// function lineWriter(){


//   for (let index=0; index<ShowingImage.all.length; index++){
//     let lineLists = document.createElement('p');
//     listHtml.appendChild(lineLists);
//     lineLists.textContent=`${ShowingImage.all[index].name} had ${ShowingImage.all[index].votes}
//      votes, and was seen ${ShowingImage.all[index].views} times.`;
//   }

// }





// imagesSection.addEventListener('click',handleClick);
// let eventRemoval =0 ;
// function handleClick(event) {
//   if (event.target.id !== 'images-section') {
//     eventRemoval++;
//     for (let i = 0; i < ShowingImage.all.length; i++) {
//       if (ShowingImage.all[i].name === event.target.title) {
//         ShowingImage.all[i].votes++;
//       }
//     }
//     if (eventRemoval===25){
//       lineWriter();
//       imagesSection.removeEventListener('click',handleClick);
//     }
//     else{
//       render();

//     }
//   }
// }


// render();


