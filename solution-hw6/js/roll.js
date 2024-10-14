const rolls = {
  Original: {
    basePrice: 2.49,
    imageFile: "../assets/products/original-cinnamon-roll.jpg",
  },
  Apple: {
    basePrice: 3.49,
    imageFile: "../assets/products/apple-cinnamon-roll.jpg",
  },
  Raisin: {
    basePrice: 2.99,
    imageFile: "../assets/products/raisin-cinnamon-roll.jpg",
  },
  Walnut: {
    basePrice: 3.49,
    imageFile: "../assets/products/walnut-cinnamon-roll.jpg",
  },
  "Double-Chocolate": {
    basePrice: 3.99,
    imageFile: "../assets/products/double-chocolate-cinnamon-roll.jpg",
  },
  Strawberry: {
    basePrice: 3.99,
    imageFile: "../assets/products/strawberry-cinnamon-roll.jpg",
  },
};

class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice, totalPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;
  }

  //Calculating Roll Prices
  calculatePrice() {
    let glazingPrice = this.basePrice;
    for (let i = 0; i < glazingOptions.length; i++) {
      if (glazingOptions[i].name == this.glazing) {
        glazingPrice += glazingOptions[i].extraCostGlaze;
      }
    }

    let packPrice = 0;
    for (let i = 0; i < packSize.length; i++) {
      if (packSize[i].name == this.size) {
        packPrice += packSize[i].extraCostPack;
      }
    }
    let price = glazingPrice * packPrice;
    return price;
  }
}
