var fs = require('fs');
    function endsWith(str, suffix) {
        var s = str.slice(str.length - suffix.length - 1);
        if (s == "." + suffix)
            return true;
        else
            return false;
};


fs.readdir(process.argv[2], function (err, list) {
    if (process.argv[3]) {
        for (var i = 0; i < list.length; i++) {
            if (endsWith(list[i], process.argv[3]))
                console.log(list[i]);
        }
    }
});