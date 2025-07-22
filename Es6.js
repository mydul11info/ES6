// -------------------------Practice Problem-1----------------

// 1. arow function

const maltiple = (a, b, c) => a * b * c;

const malti = maltiple( 10, 5,  5);
console.log(malti);


// 2. templete string

const myself = `
    I am a Web developer.
    I love to code.
    I love to eat Briyani.
`;
console.log(myself);


// 3. defult parameter
function add(num1=0, num2=0) {
    const result = num1 + num2;
    return result
};
console.log(add(20, 30));



// -----------------------Practics 2----------


const evenLengthNames = (friends) => friends.filter(name => name.length % 2 === 0);

const friends = ['Fiha', 'Nuha', 'Chris', 'Alif', 'jon'];
const result = evenLengthNames(friends);
console.log(result);