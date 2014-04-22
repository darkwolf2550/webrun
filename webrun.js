var exec = require('child_process').exec;
exports.action = function(data, callback, config, SARAH) {

var process = '%CD%/plugins/webrun/bin/exec.vbs ' + data.choice;
exec(process)					
callback({});							
}; 