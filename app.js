'use strict';
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//DOM variables
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

// Global variables
var allProducts = [];
var clickCount = 0;
var names = ['bag', 'banana', 'bathroom', 'boots','breakfast','bubblegum', 'chair',
  'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep',
  'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newArray = [];
var oldArray = [];


function Storeprod(prodName) {
  this.prodName = prodName;
  this.imagePath = 'img/' + prodName + '.jpg'; //all files must have the same extension
  this.clicks= 0;
  this.views = 0;
  allProducts.push(this); //this pushes the data above into the all stores Products array
}

//Instances will be created using the global names array
for (var i = 0; i < names.length; i++) { //this for loop will generate our instances
  new Storeprod(names[i]);
}

// This assigns a random number to the pictures to be viewed and sends it to html
function getRandomImages() {
  return Math.floor(Math.random() * allProducts.length);
}
//Crete an array of three random numbers
function arrayOfThreeNumbers() {
  oldArray [0] = newArray[0];
  oldArray [1] = newArray[1];
  oldArray [2] = newArray[2];

  newArray[0] = getRandomImages();
  //tests fist position of new array against the 1st second and third positions of the old array
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] ||
    newArray[0] === oldArray[2]) {
    console.log(newArray, 'broken value in first position of new array');
    newArray[0] = getRandomImages();
    console.log('fixed');
  }
  newArray[1] = getRandomImages();
//tests the second position of the new array against the 1st and third
  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] ||
    newArray[1] === oldArray[1] || newArray[1] === oldArray[2]) {
    //console.log(newArray, 'old broken array');
    newArray[1] = getRandomImages();
    //console.log ('caught dupes between 1st and 2nd numbers');
  }
  newArray[2] = getRandomImages();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] ||
    newArray[2] === oldArray[0] || newArray[2] === oldArray[1] ||
    newArray[2] === oldArray[2]) {
    console.log(newArray, 'old broken array');
    newArray[2] = getRandomImages();
    console.log ('caught dupe between with 3rd number');
  }
}
arrayOfThreeNumbers();
//console.log('---------');
//console.log(oldArray, 'old array');
//console.log(newArray, 'new array');

  // this will place three new images on the page
function displayThreePics() {
  arrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].imagePath; //imagePath is part of the constructor
  allProducts[newArray[0]].views += 1;//views is part of the constructor
  center.src = allProducts[newArray[1]].imagePath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].imagePath;
  allProducts[newArray[2]].views += 1;
}

displayThreePics();

//This is my function declaration for the event handler
function handlerEventClick(event) {//see picContainer below this is where its tied to
  event.preventDefault();
  console.log(event.target.src, 'was clicked'); // identify who was clicked

  if (event.target.id === 'pic-container') { // alert for clicks not on images(event.target
    return alert('Click on the image, not in between');
  }

// tally the click
  if (event.target.id === 'left') {
    allProducts[newArray[0]].clicks +=1;
    console.log(allProducts[newArray[0]]);
  }

  if (event.target.id === 'center') {
    allProducts[newArray[1]].clicks +=1;
    console.log(allProducts)
  }

  if (event.target.id === 'right') {
    allProducts[newArray[2]].clicks +=1;
    console.log(allProducts)
  }

  clickCount +=1;

  if (clickCount > 5) {
    return alert ('You are out of clicks');
  }
//   check wheter total clicks <25
//   after 25, remove event listeners on picNames
//  after 25, show "Results" button

//
//   //Event Listener is always listening
  displayThreePics();
}
picContainer.addEventListener('click', handlerEventClick);
