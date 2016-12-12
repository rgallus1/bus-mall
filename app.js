'use strict';
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for DOM access and such
var BusMall = document.getElementById('bus-mall');
var allProducts = [];
var clickCount = 0;

//var StoreProduct = function
var Storeprod = function(prodName, imagePath, talley, views) {
  this.prodName = prodName;
  this.imagePath = imagePath;
  this.talley= talley;
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


  // this.calcRandCustPerHr = function() {
  //   //console.log('Im in the random customer calc');
  //     // This will return random number of customers
  //   for (var i = 0; i < businessHour.length; i++) {
  //     this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1)) + this.minCustPerHr);
  //     //console.log('Im in the random customer calc');
  //   }
  // this.calcRandCustPerHr();
