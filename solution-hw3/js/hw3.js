const basePrice = 2.49;


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
// function createDropdowns{}

const glaze = document.querySelector("#choose-flavor");
for (let i = 0; i < glazingOptions.length; i++) {
  const dropdownOption = glazingOptions[i];
  let choice = document.createElement("option");
  choice.textContent = dropdownOption.name;
  choice.value = dropdownOption.extraCostGlaze;
  glaze.add(choice);
}

const pack = document.querySelector("#choose-size");
for (let i = 0; i < packSize.length; i++) {
  const dropdownOption = packSize[i];
  let choice = document.createElement("option");
  choice.textContent = dropdownOption.name;
  choice.value = dropdownOption.extraCostPack;
  pack.add(choice);
}

function glazingChange() {
    const currentGlaze = document.getElementById("choose-flavor");
    //console.log(currentGlaze);
    const priceChangeGlaze = currentGlaze.value;
    console.log("Extra Glaze Price: " + priceChangeGlaze);

    const currentPack = document.getElementById("choose-size");
    //console.log(currentPack);
    const priceChangePack = currentPack.value;
    console.log("Extra Pack Price: " +priceChangePack);

    // const currentPack = document.querySelector("#choose-size");
    // const priceChangePack = element.value;

    // console.log(typeof(priceChangeGlaze));
    // console.log(typeof(priceChangePack));
    const glazeNumber = Number(priceChangeGlaze);
    const packNumber = Number(priceChangePack);
    // let price = (basePrice + priceChangeGlaze) * priceChangePack;
    let price = (basePrice + glazeNumber) * packNumber;
    let priceRounded = price.toFixed(2);
    console.log(price); 
    let glazePrice = document.getElementById("updated-price");
    glazePrice.innerHTML = "$" + priceRounded; 


}

// (basePrice + glazingPrice) * packPrice. 


// {/* <select id="glazingOptions"
//         onchange="glazingChange(this)">
//   {/* <!-- options populated dynamically --> */}

// </select>
// function glazingChange(element) {
//     // get value of selected glazing option
//     const priceChange = element.value;
    
//   // add your code to do update the price ...
//   }
  

// function priceChange()
// {

// } */}
// priceChange(rollType, packSize)
// {

//     set and get glazing
//      set and get pack size
//    set and get price adaptation
//    (find function)
//     querySelector/getElementByID

//     updated
//     get
