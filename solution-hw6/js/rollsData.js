//Which roll did user click
const whichRoll = rolls[rollType];
//Change Title
const title = document.querySelector(".header-rolls");
//if rolltype is null innerhtml, else do this
if (rollType == null) {
  title.innerHTML = "Our hand-made cinnamon rolls";
} else {
  title.innerHTML = rollType + " Cinnamon Roll";
}
//Change Image
document.querySelector("#original-roll-PD").src = whichRoll.imageFile;
//Change Base Price
const changeBasePrice = document.querySelector("#updated-price");
changeBasePrice.innerHTML = "$" + whichRoll.basePrice;

let cartArray = [];
//Source - https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
function changeCart() {
  const rollGlazing = document.getElementById("choose-flavor");
  const rollGlazingValue = rollGlazing.options[rollGlazing.selectedIndex];
  const rollGlazingText = rollGlazingValue.text;
  const packSize = document.getElementById("choose-size");
  const packSizeValue = packSize.options[packSize.selectedIndex];
  const packSizeText = packSizeValue.text;
  const basePrice = whichRoll.basePrice;

  const printRoll = new Roll(
    rollType,
    rollGlazingText,
    packSizeText,
    basePrice
  );
  addNewRoll(
    printRoll.type,
    printRoll.glazing,
    printRoll.size,
    printRoll.basePrice
  );

  cartArray.push(printRoll);
  console.log(cartArray);

  return printRoll;
}
