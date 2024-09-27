// const rolls = {
//     "Original": {
//         "basePrice": 2.49,
//         "imageFile": "original-cinnamon-roll.jpg"
//     },
//     "Apple": {
//         "basePrice": 3.49,
//         "imageFile": "apple-cinnamon-roll.jpg"
//     },
//     "Raisin": {
//         "basePrice": 2.99,
//         "imageFile": "raisin-cinnamon-roll.jpg"
//     },
//     "Walnut": {
//         "basePrice": 3.49,
//         "imageFile": "walnut-cinnamon-roll.jpg"
//     },
//     "Double-Chocolate": {
//         "basePrice": 3.99,
//         "imageFile": "double-chocolate-cinnamon-roll.jpg"
//     },
//     "Strawberry": {
//         "basePrice": 3.99,
//         "imageFile": "strawberry-cinnamon-roll.jpg"
//     }    
// };

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
document.querySelector(".header-rolls").textContent = rollType + " Cinnamon Roll";

//Change Image
document.querySelector("#original-roll-PD").src = whichRoll.imageFile;

//Change Base Price 
document.querySelector("#updated-price").textContent = "$" + whichRoll.basePrice;



