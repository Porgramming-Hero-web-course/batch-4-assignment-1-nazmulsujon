"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - this.year;
        return carAge;
    }
}
const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge());
