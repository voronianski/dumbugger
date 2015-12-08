require('../server');

setTimeout(function () {
    throw new TypeError('Oooops! On server...');
}, 3000);
