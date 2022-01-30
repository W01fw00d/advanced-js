const multipleDepthsObject = {
  user: {
    name: "Pedro",
    email: "pedro.fake@gmail.com",
    age: "50",
  },
  active: true,
  address: {
    street: {
      name: "Street",
      number: "11",
    },
    PC: "000000",
  },
  // itemsBought: ["TV", "Box", "Sofa"], // TODO: flatten arrays like "itemsBought1: "TV"
};

// Current:
/* FINAL RESULT: {
  userName: 'Pedro',
  userEmail: 'pedro.fake@gmail.com',
  userAge: '50',
  active: true,
  addressStreetName: 'Street',
  addressStreetNumber: '11',
  addressPC: '000000'
} */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const flatten = (objectToFlatten, previousKeys = []) =>
  // A recursive implementation of a flatten object function using reduce()
  Object.keys(objectToFlatten).reduce((total, currentKey) => {
    const currentKeys = [...previousKeys, currentKey];
    const currentValue = objectToFlatten[currentKey];

    if (typeof currentValue === "object") {
      return {
        ...total,
        ...flatten(currentValue, currentKeys),
      };
    } else {
      const capitalizeFirstLetterOfWord = (key, index) =>
        index !== 0 ? capitalizeFirstLetter(key) : key;

      total[currentKeys.map(capitalizeFirstLetterOfWord).join("")] =
        currentValue;

      return total;
    }
  }, {});

console.log("FINAL RESULT:", flatten(multipleDepthsObject));
