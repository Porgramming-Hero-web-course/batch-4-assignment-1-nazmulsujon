"use strict";
const getProperty = (obj, key) => {
    const propertyValue = obj[key];
    return propertyValue;
};
const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));
