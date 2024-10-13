const queryString = window.location.search;
const params = new URLSearchParams(queryString);
let rollType = params.get("roll");

// let currentGlaze;
//let currentPack;
let basePrice;

//Glazing Options + Price Change
let glazingOptions = [
  {
    name: "Keep original",
    extraCostGlaze: 0,
  },
  {
    name: "Sugar milk",
    extraCostGlaze: 0,
  },
  {
    name: "Vanilla milk",
    extraCostGlaze: 0.5,
  },
  {
    name: "Double chocolate",
    extraCostGlaze: 1.5,
  },
];
//Pack Optios + Price Change
let packSize = [
  {
    name: "1",
    extraCostPack: 1,
  },
  {
    name: "3",
    extraCostPack: 3,
  },
  {
    name: "6",
    extraCostPack: 5,
  },
  {
    name: "12",
    extraCostPack: 10,
  },
];
// Populating Glazing Flavor Optios - Source HW Example Document
const glaze = document.querySelector("#choose-flavor");
for (let i = 0; i < glazingOptions.length; i++) {
  const dropdownOption = glazingOptions[i];
  let choice = document.createElement("option");
  choice.textContent = dropdownOption.name;
  choice.value = i;
  glaze.add(choice);
}
// Populating Pack Size Options - Source HW Example Document
const pack = document.querySelector("#choose-size");
for (let i = 0; i < packSize.length; i++) {
  const dropdownOption = packSize[i];
  let choice = document.createElement("option");
  choice.textContent = dropdownOption.name;
  choice.value = i;
  pack.add(choice);
}
//Update Selection Price - Source HW Example Document
function glazingChange() {
  //Pull selections
  // currentGlaze = document.getElementById("choose-flavor");
  const priceChangeGlaze = getCurrentGlaze().extraCostGlaze;
  currentPack = document.getElementById("choose-size");
  const priceChangePack = getCurrentPack().extraCostPack;

  //Calculate pricing
  basePrice = whichRoll.basePrice;
  const glazeNumber = Number(priceChangeGlaze);
  const packNumber = Number(priceChangePack);
  let price = (basePrice + glazeNumber) * packNumber;
  let priceRounded = price.toFixed(2);
  let glazePrice = document.getElementById("updated-price");
  glazePrice.innerHTML = "$" + priceRounded;
}

function getCurrentGlaze() {
  const glazeSelectElement = document.getElementById("choose-flavor");
  const selectedItemIndex = glazeSelectElement.value;
  const selectedGlazingOption = glazingOptions[selectedItemIndex];
  return selectedGlazingOption;
}
function getCurrentPack() {
  const packSelectElement = document.getElementById("choose-size");
  const selectedItemIndex = packSelectElement.value;
  const selectedPackOption = packSize[selectedItemIndex];
  return selectedPackOption;
}

// document.addEventListener("DOMContentLoaded", function(){
//   console.log("Dom working");
  document.getElementById("add").addEventListener("click", function () {
    console.log("button pushed");
    glazingChange();
    rollSet.add(new Roll(rollType, getCurrentGlaze().name, getCurrentPack().name, basePrice));
    //console.log(currentGlaze);
    console.log(rollSet);
    saveToLocalStorage();
  });
  // });

//event listener for add to cart button "click"
//roll set.add new Roll (rolltype...)
//save to local storage
//sending this to cart
//call savetolocal storage
