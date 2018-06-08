
const add = (a, b) => {
    return a + b;
}

console.log(add(55,44));

const user = {
    name: 'Simon',
    cities: ['Gothenburg', 'Stockholm', 'Dublin'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);

        return cityMessages;

    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplier: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplier);
    }
};

console.log(multiplier.multiply());