//import method index dan store
const { index, store, update ,destroy } = require("./FruitController.js");

const main = () => {
    index();
    store("Pisang");
    update(0, "Kelapa");
    destroy(0);
};

main();