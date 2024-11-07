"use strict";
const validateKeys = (obj, keys) => {
    const isExist = keys.every((key) => key in obj);
    return isExist;
};
const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "age"]));
console.log(validateKeys(person1, ["name", "address"]));
