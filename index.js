var path = require("path");
var config = {};
module.exports = config;

var configpath = "config.js";
if( process.argv.length >= 3 ) {
    configpath = process.argv[2];
}

config.$load = function(dirname) {
    if(!dirname) {
        dirname = "./";
    }
    var conf = {};
    var filepath = path.resolve(dirname,configpath);
    try {
        conf = require(filepath);
    }
    catch(e) {
        console.error("config file load failed:",e.message);
        process.exit();
        return;
    }
    for(var key in conf) {
        config[key] = conf[key];
    }
    return config;
}

