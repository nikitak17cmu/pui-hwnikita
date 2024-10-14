if (localStorage.getItem("storedCart") != null) {
  retrieveFromLocalStorage();
}

function saveToLocalStorage() {
  const cartArray = Array.from(rollSet);
  console.log(rollSet);

  const rollArrayString = JSON.stringify(cartArray);
  console.log(rollArrayString);

  localStorage.setItem("storedCart", rollArrayString);
}

function retrieveFromLocalStorage() {
  const rollArrayString = localStorage.getItem("storedCart");
  const rollArray = JSON.parse(rollArrayString);

  for (const rollData of rollArray) {
    const roll = new Roll(
      rollData.type,
      rollData.glazing,
      rollData.size,
      rollData.basePrice
    );
    rollSet.add(roll);
  }
}

for (const rollElement of rollSet) {
  createElement(rollElement);
}
