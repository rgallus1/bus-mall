'use strict';
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for DOM access and such
var BusMall = document.getElementById('bus-mall');
var allProducts = [];
var clickCount = 0;
//var lastThreeNums = [];

//var StoreProduct = function
var Storeprod = function(prodName, imagePath, clickedTalley, views) {
  this.prodName = prodName;
  this.imagePath = imagePath;
  this.clickedTalley= clickedTalley;
  this.views = views;
  allProducts.push(this); //this pushes the data above into the all stores Products array
}

function storeprod() { //this is outside the constructor
  new Storeprod('bag', 'img/bag.jpg', 0, 0);
  new Storeprod('banana', 'img/banana.jpg', 0, 0);
  new Storeprod('bathroom','img/bathroom.jpg', 0, 0);
  new Storeprod('boots', 'img/boots.jpg', 0, 0);
  new Storeprod('breakfast','img/breakfast.jpg', 0, 0);
  new Storeprod('bubblegum', 'img/bubblegum.jpg', 0, 0);
  new Storeprod('chair', 'img/chair.jpg', 0, 0);
  new Storeprod('cthulhu','img/cthulhu.jpg', 0, 0);
  new Storeprod('dog-duck', 'img/dog-duck.jpg', 0, 0);
  new Storeprod('dragon','img/dragon.jpg', 0, 0);
  new Storeprod('pen', 'img/pen.jpg', 0, 0);
  new Storeprod('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
  new Storeprod('scissors','img/scissors.jpg', 0, 0);
  new Storeprod('shark', 'img/shark.jpg', 0, 0);
  new Storeprod('sweep','img/sweep.png', 0, 0);
  new Storeprod('tauntaun', 'img/tauntaun.jpg', 0, 0);
  new Storeprod('unicorn', 'img/unicorn.jpg', 0, 0);
  new Storeprod('usb','img/usb.gif', 0, 0);
  new Storeprod('water-can', 'img/water-can.jpg', 0, 0);
  new Storeprod('wine-glass','img/wine-glass.jpg', 0, 0);
}
storeprod();

// This picks random pictures to be viewed and sends it to html
function getRandomImages() {
  for (var i = 0; i < allProducts.length; i++) {
    var randomImages = Math.floor(Math.random() * allProducts.length);
    console.log(randomImages);
    console.log('here are my random images', allProducts[randomImages]);

    var left = document.getElementById('left');
    left.src = allProducts[randomImages].imagePath;

    var center = document.getElementById('center');
    center.src = allProducts[randomImages[i]].imagePath;

    var right = document.getElementById('right');
    right.src = allProducts[randomImages].imagePath;
    // lastThreeNums[i] = randomImages;
    // console.log(lastThreeNums);
  }
}
  // var secondNum = randomImages;
  //   //console.log(secondNum);
  // var thirdNum = randomImages;
  //   //console.log(thirdNum);

getRandomImages();

// function displayImages() {
//   var left = document.getElementById('left');
//   left.src = allProducts[randomImages].imagePath;
//
//   var center = document.getElementById('center');
//   center.src = allProducts[randomImages].imagePath;
//
//   var right = document.getElementById('right');
//   right.src = allProducts[randomImages].imagePath;
// }
//displayImages();


//This is my function declaration for the event handler
// function handlerEventClick(event) {
//   event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event
//   if (clickCount >5) {
//     return;
//   }
//   if (!event.target.imagePath.value) {
//     return alert('You must click on an image!');
//   }
// //call clear function to clear images
// //call set images to view function
// }
//handlerEventClick();
//
//   //Event Listener is always listening
//   BusMall.addEventListener('click', handlerEventClick);
