'use strict';
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//DOM variables
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var busmallChart;
//var chartDrawn = false;

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
    //console.log(newArray, 'broken value in first position of new array');
    newArray[0] = getRandomImages();
    console.log(newArray);
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
    //console.log(newArray, 'old broken array');
    newArray[2] = getRandomImages();
    //console.log ('caught dupe between with 3rd number');
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

  if (clickCount > 25) {
    displayList();
    return alert ('You are out of clicks');
  }

//local storage follows
  var stuff = JSON.stringify(allProducts);
  localStorage.setItem('productData', stuff);
  displayThreePics();
}

//checks to see if there is local storage present
function storeDataRetrieve(){
  if(localStorage.productData){
    console.log('local Storage exists!')

    var retrievedStuff = localStorage.getItem('productData');
    var parsedStuff = JSON.parse(retrievedStuff);

    allProducts = parsedStuff
    console.log(allProducts);
    console.log(parsedStuff);
  }
}
//calls check to see if local storage is present
storeDataRetrieve();

picContainer.addEventListener('click', handlerEventClick);

//display final list
var pictureList = document.getElementById('pictureList');
function displayList() {
  pictureList.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var ulEl = document.createElement('ul');
    //var ulEl2 = document.createElement('ul');
    ulEl.textContent = allProducts[i].clicks + ' votes for for the ' + allProducts[i].prodName;
    //ulEl.textContent = allProducts[i].prodName + ' has been clicked ' + allProducts[i].clicks + ' times';
    //ulEl2.textContent = allProducts[i].prodName + ' has been viewed ' + allProducts[i].views + ' times';
    pictureList.appendChild(ulEl);
    //pictureList.appendChild(ulEl2);
  }
}

//Bar Chart Section
// FUNCTION DECLARATIONS
// ++++++++++++++++++++++++++++++++++++++++++++
// Arrays to hold data for the chart
var chartName = [];
var chartClicks = [];


//function to update the chart Arrays
function updateChartArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    chartName[i] = allProducts[i].prodName;
    chartClicks[i] = allProducts[i].clicks;
  }
}
updateChartArrays();
console.log('in update Chart Arrays');
var data = {
  labels: chartName, // titles array we declared earlier
  datasets: [
    {
      data: chartClicks, // votes array we declared earlier
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy'
      ],
      hoverBackgroundColor: [
        'purple',
        'purple',
        'purple',
        'purple',
        'purple'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('busmall-chart').getContext('2d');
  busmallChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false
    },
    scales: [{
      ticks: {
        beginAtZero:true
      }
    }]
  });
  //chartDrawn = true;
}
// // ++++++++++++++++++++++++++++++++++++++++++++
// // EVENT LISTENERS
// // ++++++++++++++++++++++++++++++++++++++++++++
document.getElementById('draw-chart').addEventListener('click', function(){
  drawChart();
});
