//Source- Lab 5
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

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
  const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
  rollSet.add(newRoll);
  return newRoll;
}

for (const rollLoop of rollSet) {
  createElement(rollLoop);
}

function createElement(roll) {
  const template = document.querySelector("#roll-template");
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector(".original-main");
  const rollListElement = document.querySelector(".cart-items");
  rollListElement.prepend(roll.element);
  updateElement(roll);

  const rollRemove = roll.element.querySelector(".remove-original");
  rollRemove.addEventListener("click", () => {
    deleteRoll(roll);
  });
}

function updateElement(roll) {
  const rollImageElement = roll.element.querySelector("#original-roll-cart");
  const rollTypeElement = roll.element.querySelector(".roll-name");
  const rollGlazeElement = roll.element.querySelector(".roll-glaze");
  const rollPackElement = roll.element.querySelector(".roll-pack");
  const rollPriceElement = roll.element.querySelector(".original-row-price");

  rollImageElement.src = rolls[roll.type]["imageFile"];
  rollTypeElement.innerText = roll["type"] + " Cinnamon Roll";
  rollGlazeElement.innerText = "Glazing: " + roll["glazing"];
  rollPackElement.innerText = "Pack Size: " + roll["size"];

  //Push individual roll prices
  const rollPrice = roll.calculatePrice();
  rollPriceElement.innerText = "$" + rollPrice.toFixed(2);

  //Push total price
  const rollTotalPriceElement = document.querySelector(".cart-total");
  const totalPrice = calculateTotalPrice();
  rollTotalPriceElement.innerHTML = "$" + totalPrice.toFixed(2);
}
//Remove roll from cart
function deleteRoll(newRoll) {
  newRoll.element.remove();
  rollSet.delete(newRoll);
  const rollTotalPriceElement = document.querySelector(".cart-total");
  const newPrice = calculateTotalPrice();
  rollTotalPriceElement.innerHTML = "$" + newPrice.toFixed(2);

  saveToLocalStorage();
}
//Total price
function calculateTotalPrice() {
  let cartPrice = 0;
  rollSet.forEach(function (roll) {
    let rollPrice = roll.calculatePrice();
    cartPrice += rollPrice;
  });
  return cartPrice;
}
