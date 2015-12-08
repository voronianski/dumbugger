(function () {
    window.onerror = function (message, file, line, col, error) {
        var win = window.open('https://www.google.com/#q=' + encodeURIComponent(message), '_blank');
        win.focus();
    };
})();
