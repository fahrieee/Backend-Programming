//import fruits
const fruits = require("./data.js");

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
    index();
};

const destroy = (id) => {
    fruits.splice(id, 1);
    index();
};

const update = (id, name) => {
    fruits[id] = name;
    index();
};


module.exports = { index, store, update, destroy };