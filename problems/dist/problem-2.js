"use strict";
const removeDuplicates = (array) => {
    const uniqueElements = [];
    for (const num of array) {
        if (uniqueElements.indexOf(num) === -1) {
            uniqueElements.push(num);
        }
    }
    return uniqueElements;
};
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
