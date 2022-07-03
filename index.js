function receivesAFunction(x,callback) {
 return x(callback);
}

function returnsANamedFunction() {
    return receivesAFunction;
}

(function () {
    console.log('Anonymous function');
});

function returnsAnAnonymousFunction() {
    return function(){}   
};

