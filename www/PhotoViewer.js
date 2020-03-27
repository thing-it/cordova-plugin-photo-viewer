var exec = require('cordova/exec');

exports.show = function(url, title, options, success) {
    if( title == undefined ) {
      title = '';
    }

    if(typeof options == "undefined"){
        options = {};
    }

    exec(success, function(){}, "PhotoViewer", "show", [url, title, options]);
};
