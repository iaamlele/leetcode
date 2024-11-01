const test = () => {
    console.log(this);
}

const test2 = function() {
    console.log(this);
}

(function() {
    console.log(this);
    test();
    test2();
})();
