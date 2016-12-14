'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

// Global variables
// -----------------
var allProducts = [];
var names = ['bag', 'banana', 'bathroom', 'boots','breakfast','bubblegum', 'chair',
'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep'; ];
var newArray = [];
var oldArray = []'
'
// Constructor
// -----------------
function Product(name,filepath) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';//this only works because sams files are all jpg's
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

// Instances
// -----------------
// new Product('bag');  these were removed because we created the names array
// new Product('banana');


for (var i = 0; i < names.length; i++) { //this for loop will generate our instances
  new Product(names[i]);
}

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

function rand() {
  // generate a random number between 0 and allProducts.length
  return Math.floor(Math.random() * allProducts.length);
}

var newArray = [];
var oldArray = [];

function makeArrayOfThreeNumbers() {
  oldArray [0] = newArray[0];
  oldArray [1] = newArray[1];
  oldArray [2] = newArray[2];

  newArray[0] = rand();
  //tests fist position of new array against the 1st second and third positions of the old array
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] ||
    newArray[0] === oldArray[2]) {
    console.log(newArray, 'broken value in first position of new array');
    newArray[0] = rand();
    console.log('fixed');
  }
  newArray[1] = rand();

  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] ||
    newArray[1] === oldArray[2]) {
    //console.log(newArray, 'old broken array');
    newArray[1] = rand();
    console.log ('caught dupes between 1st and 2nd numbers');
  }
  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1]  || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] ||
    newArray[2] === oldArray[2]) {
    console.log(newArray, 'old broken array');
    newArray[2] = rand();
    console.log ('caught dupe between with 3rd number');
  }
}
makeArrayOfThreeNumbers();
console.log('---------');
console.log(oldArray, 'old array');
console.log(newArray, 'new array');

//the following is used to test that the new array moves into the old array for comparison
  //for (var i = 0; i < 10; I++) {
  // makeArrayOfThreeNumbers();
  // console.log('-----NEW Run of making an array----');
  // console.log(oldArray, 'old array');
  // console.log(newArray, 'new array');

function showThreePics() {
  // this will place three new images on the page
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filepath; //I think filepath is part of the constructor too
  allProducts[newArray[0]].views += 1;//views is part of the constructor
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views += 1;
}

function renderList() {
  // display a list of items and total clicks/views
}

function handleClick(event) {//see picContainer below this is where its tied to
  event.preventDefault();
  // identify who was clicked
  console.log(event.target.src, 'was clicked');
    // alert for clicks not on images(event.target )

    if (event.target.id === 'picContainer'){
      return alert('Click on the image, not in between');
    }
// tally the click
    if (event.target.id === 'left') {
      allProducts[newArray[0]].clicks +=1;
      console.log(allProducts[newArray[0]]);
    ]

    if (event.target.id === 'center') {
        allProducts[newArray[1]].clicks +=1;
        console.log(allProducts)
      }

    if (event.target.id === 'right') {
          allProducts[newArray[2]].clicks +=1;
          console.log(allProducts)
        }

    clickCount +=1;

    if clickcounter  >5 {
      return alert ('You are out of clicks');
      }

  // check whether total clicks <25
  // after 25, remove event listeners on picNames
    // after 25, show "Results" button
    // clear old images
  // display 3 new images
  showThreePics();
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
picContainer.addEventListener('click', handleClick);//picContainer is the section id in html
