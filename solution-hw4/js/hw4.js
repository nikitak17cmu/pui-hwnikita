const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");


//Base Price - Keep original, 1 pack size
//const basePrice = 2.49;


//Glazig Optios + Price Change
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
  choice.value = dropdownOption.extraCostGlaze;
  glaze.add(choice);
}
// Populating Pack Size Options - Source HW Example Document
const pack = document.querySelector("#choose-size");
for (let i = 0; i < packSize.length; i++) {
  const dropdownOption = packSize[i];
  let choice = document.createElement("option");
  choice.textContent = dropdownOption.name;
  choice.value = dropdownOption.extraCostPack;
  pack.add(choice);
}
//Update Selection Price - Source HW Example Document
function glazingChange() {
  //Pull selections
  const currentGlaze = document.getElementById("choose-flavor");
  const priceChangeGlaze = currentGlaze.value;
  const currentPack = document.getElementById("choose-size");
  const priceChangePack = currentPack.value;

  //Calculate pricing
  const basePrice = whichRoll.basePrice;
  const glazeNumber = Number(priceChangeGlaze);
  const packNumber = Number(priceChangePack);
  let price = (basePrice + glazeNumber) * packNumber;
  let priceRounded = price.toFixed(2);
  let glazePrice = document.getElementById("updated-price");
  glazePrice.innerHTML = "$" + priceRounded;
}
