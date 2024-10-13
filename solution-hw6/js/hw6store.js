//let rollSet = new Set();
//let cartArray = [];

if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
  }

function saveToLocalStorage() {
    const cartArray = Array.from(rollSet);
    console.log(rollSet);

    const rollArrayString = JSON.stringify(cartArray);
    console.log(rollArrayString);

    localStorage.setItem('storedCart', rollArrayString);
}

function retrieveFromLocalStorage() {    
    const rollArrayString = localStorage.getItem('storedCart');
    const rollArray = JSON.parse(rollArrayString);
     //rollSet = new Set(rollArray);
    //console.log("array storage" + rollArray);
    //console.log("hi");
    for (const rollData of rollArray) {
      const roll = new Roll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
      rollSet.add(roll);
      //createElement(roll);
    }
}

for(const rollElement of rollSet){
    createElement(rollElement);
}




//push cart array from rolls data into local storage with save to local storage 




