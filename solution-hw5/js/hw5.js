// global total variable 
// roll class
// {
//     constructor 
//     calculate price function
//     {
//         total += price of object made
        
//     } 
// }

// roll objects (hard code) make the objects 
// calculate price of individual rolls 

// function to remove 
// {
//     total+=  price of particular object;
// }

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

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, totalPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        //this.element = null;
    }
    //each roll
    //return price 
    
    calculatePrice()
    {
        let glazingPrice = this.basePrice;
        for(let i = 0; i <glazingOptions.length; i++)
        {
            if(glazingOptions[i].name==this.glazing)
            {
                glazingPrice += glazingOptions[i].extraCostGlaze;
                console.log("cost in loop: " + glazingPrice);
            }
        }
        //return glazingPrice;

        let packPrice = 0;
        for(let i = 0; i <packSize.length; i++)
        {
            if(packSize[i].name==this.size)
            {
                packPrice += packSize[i].extraCostPack;
                //console.log(packPrice);
            }
        }
        //return packPrice;

        let price = glazingPrice * packPrice;
        // console.log("Glazing Price: " + glazingPrice);
        // console.log("Base price: " + this.basePrice);
        // console.log("Pack Price: " + packPrice);
        return price;

    }
}

const rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice){
    const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    rollSet.add(newRoll);
    return (newRoll);
}

const appleRoll = addNewRoll(
    "Apple",
    "Keep original",
     3,
     3.49
);
const raisinRoll = addNewRoll(
    "Raisin",
    "Sugar milk",
     3,
     2.99
);
const walnutRoll = addNewRoll(
    "Walnut",
    "Vanilla milk",
     12,
     3.49
);
const ogRoll = addNewRoll(
    "Original",
    "Sugar milk",
     1,
     2.49
);

for (const rollLoop of rollSet){
    //console.log(roll);
    createElement(rollLoop);
}


function createElement(roll){
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.original-main');

    console.log(roll.element);
    console.log("this is working");
    const rollListElement = document.querySelector('.cart-items')
    rollListElement.prepend(roll.element);
    updateElement(roll);

    const rollRemove = roll.element.querySelector('.remove-original');
    rollRemove.addEventListener('click', () => {
        deleteRoll(roll);
    });

    //calculateTotalPrice();
    console.log(roll);
}

// createElement(rollEx);

function updateElement(roll){
    const rollImageElement = roll.element.querySelector('#original-roll-cart');
    const rollTypeElement = roll.element.querySelector('.roll-name');
    const rollGlazeElement = roll.element.querySelector('.roll-glaze');
    const rollPackElement = roll.element.querySelector('.roll-pack');
    const rollPriceElement = roll.element.querySelector('.original-row-price');

    rollImageElement.src = rolls[roll.type]["imageFile"];
    rollTypeElement.innerText = roll["type"] + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + roll["glazing"];
    rollPackElement.innerText = "Pack Size: " + roll["size"];

    const rollPrice = roll.calculatePrice();
    rollPriceElement.innerText = "$" + rollPrice.toFixed(2);
    // rollPriceElement.innerText = "$" + rollPrice.toFixed(2);
    //call calculate price here 
    
    //rolltotalprice inner html

    //calculateTotalPrice();

    const rollTotalPriceElement = document.querySelector('.cart-total');
    const totalPrice = calculateTotalPrice();
    //console.log("Update element: " + totalPrice);
    rollTotalPriceElement.innerHTML = "$" + totalPrice.toFixed(2);

}

function deleteRoll(newRoll) {
    newRoll.element.remove();
    rollSet.delete(newRoll);
    //update price
    const rollTotalPriceElement = document.querySelector('.cart-total');
    const newPrice = calculateTotalPrice();
    rollTotalPriceElement.innerHTML = "$" + newPrice.toFixed(2);

}

function calculateTotalPrice(){
    let cartPrice = 0; 
    rollSet.forEach(function(roll){
        let rollPrice = roll.calculatePrice();
        cartPrice += rollPrice;
    });
    return cartPrice;
}



//total price function
//total cost = 0
//set.foreach(newroll)
//can make this a for loop 
//inner html to element for price 
