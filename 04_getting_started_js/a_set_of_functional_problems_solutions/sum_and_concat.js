/* eslint-disable linebreak-style */
const sum = (a, b) =>{
    (typeof (a) === 'number' && typeof (b) === 'number') ?
    a + b : new TypeError('Something is wrong with the types.');
};

sum(1, 2);

const concat = (a, b) =>{
    (typeof (a) === 'string' && typeof (b) === 'string') ?
    a + b : new TypeError('Something is wrong with the types.');
};

concat('a', 'b');
