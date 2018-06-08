/* const square = function(x){
    return x*x;
};

const squareArrow = (x) => {
    return x*x;
}; 

const squareArrow = (x) => x * x;

console.log(squareArrow(5)); */

const getFirstName = (fullName) => fullName.indexOf(' ') !== -1 ? fullName.split(' ')[0] : 'No firstName';
   

console.log(getFirstName('fndsjfhdskjfdsf'));

console.log(getFirstName('Simon Karlsson'));