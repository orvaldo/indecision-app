'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 44));

var user = {
    name: 'Simon',
    cities: ['Gothenburg', 'Stockholm', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplier: 10,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplier;
        });
    }
};

console.log(multiplier.multiply());
