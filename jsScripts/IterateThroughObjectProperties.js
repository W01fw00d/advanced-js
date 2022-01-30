// Iterating through object properties

const user = {
  name: "Gabriel",
  email: "fake@gmail",
};

console.log("FOR IN");
for (const prop in user) {
  if (user.hasOwnProperty(prop)) {
    console.log(`user.${prop} = ${user[prop]}`);
  }
}

console.log("FOR OF");
for (let [key, value] of Object.entries(user)) {
  console.log(`user.${key} = ${value}`);
}

console.log("ITERATOR");
const objectIterator = (object) => {
  const keys = Object.getOwnPropertyNames(object);

  return {
    i: 0,
    next() {
      if (this.i < keys.length) {
        const key = keys[this.i++];
        return { key, value: object[key], done: false };
      }
      return { key: undefined, value: undefined, done: true };
    },
  };
};

const userIterator = objectIterator(user);

let result = userIterator.next();
while (!result.done) {
  console.log(`user.${result.key} = ${result.value}`);
  result = userIterator.next();
}

console.log("GENERATOR");
function* makeObjectIterator(object) {
  const keys = Object.getOwnPropertyNames(object);

  let iterationCount = 0;
  for (let i = 0; i < keys.length; i += 1) {
    iterationCount++;
    const key = keys[i];
    yield { key, value: object[key] };
  }
  return iterationCount;
}

const it = makeObjectIterator(user);

for (const itItem of it) {
  console.log(`user.${itItem.key} = ${itItem.value}`);
}

console.log("ITERABLE OBJECT - ALL PROPERTIES");
const iterableUser = {
  ...user,
  [Symbol.iterator]: function* () {
    const keys = Object.getOwnPropertyNames(this);

    let iterationCount = 0;
    for (let i = 0; i < keys.length; i += 1) {
      iterationCount++;
      const key = keys[i];
      yield { key, value: this[key] };
    }
    return iterationCount;
  },
};

console.log([...iterableUser]);

console.log("ITERABLE OBJECT - CUSTOM PROPERTIES");
const iterableUserFullName = {
  ...user,
  surname: "Smith",
  [Symbol.iterator]: function* () {
    yield { key: "name", value: this.name };
    yield { key: "surname", value: this.surname };
  },
};

console.log([...iterableUserFullName]);
