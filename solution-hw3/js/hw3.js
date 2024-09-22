//Base Price - Keep original, 1 pack size
const basePrice = 2.49;

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

// Populating Glazing Flavor Optios
const glaze = document.querySelector("#choose-flavor");
for (let i = 0; i < glazingOptions.length; i++) {
  const dropdownOption = glazingOptions[i];
  let choice = document.createElement("option");
  choice.textContent = dropdownOption.name;
  choice.value = dropdownOption.extraCostGlaze;
  glaze.add(choice);
}

// Populating Pack Size Options
const pack = document.querySelector("#choose-size");
for (let i = 0; i < packSize.length; i++) {
  const dropdownOption = packSize[i];
  let choice = document.createElement("option");
  choice.textContent = dropdownOption.name;
  choice.value = dropdownOption.extraCostPack;
  pack.add(choice);
}

//Update Selectio Price
function glazingChange() {
  const currentGlaze = document.getElementById("choose-flavor");
  const priceChangeGlaze = currentGlaze.value;
  //console.log("Extra Glaze Price: " + priceChangeGlaze);

  const currentPack = document.getElementById("choose-size");
  const priceChangePack = currentPack.value;
  //console.log("Extra Pack Price: " +priceChangePack);

  const glazeNumber = Number(priceChangeGlaze);
  const packNumber = Number(priceChangePack);
  let price = (basePrice + glazeNumber) * packNumber;
  let priceRounded = price.toFixed(2);
  console.log(price);
  let glazePrice = document.getElementById("updated-price");
  glazePrice.innerHTML = "$" + priceRounded;
}
