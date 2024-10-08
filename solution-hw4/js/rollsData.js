
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "../assets/products/original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "../assets/products/raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/strawberry-cinnamon-roll.jpg"
    }    
    };
//Which roll did user click 
const whichRoll = rolls[rollType];
//Change Title
const title = document.querySelector(".header-rolls");
//if rolltype is null innerhtml, else do this 
if(rollType == null){
    title.innerHTML = "Our hand-made cinnamon rolls";
}
else{
    title.innerHTML = rollType +  " Cinnamon Roll";
}
//Change Image
document.querySelector("#original-roll-PD").src = whichRoll.imageFile;
//Change Base Price 
const changeBasePrice = document.querySelector("#updated-price");
changeBasePrice.innerHTML = "$" + whichRoll.basePrice;

//Add to cart
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
let cartArray = [];
//Source - https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
function changeCart()
{
    const rollGlazing = document.getElementById("choose-flavor")
    const rollGlazingValue = rollGlazing.options[rollGlazing.selectedIndex];
    const rollGlazingText = rollGlazingValue.text;  
    const packSize = document.getElementById("choose-size")
    const packSizeValue = packSize.options[packSize.selectedIndex];
    const packSizeText = packSizeValue.text;
    const basePrice = whichRoll.basePrice;
    const printRoll = new Roll(rollType, rollGlazingText, packSizeText, basePrice);

    cartArray.push(printRoll);
    console.log(cartArray);
}
