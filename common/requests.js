var http = require('http');  
  
var qs = require('querystring');


module.exports = {
    get: function(reqParam,sendData,successcb,failurecb){
        var content = qs.stringify(sendData);

        var options = {  
            hostname: reqParam.host,
            port: reqParam.port,
            path: '/' + reqParam.url + '?' + content,
            method: 'GET'  
        };  
        console.log('[REQUEST_PATH]=>'+ options.hostname + options.path);
        var req = http.request(options, function (res) {  
            res.setEncoding('utf8');  
            res.on('data', function (chunk) {  
                successcb(chunk);  
            });  
        });  
          
        req.on('error', function (e) {  
            failurecb( e.message);
        });  
          
        req.end();  
    },
    post: function(reqParam,reqData,successcb,failurecb){
        var content = qs.stringify(reqData);
          
        var options = {  
            hostname: reqParam.host,
            port: reqParam.port,
            path: '/' + reqParam.url,
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
            }  
        };  
          
        var req = http.request(options, function (res) {  
            res.setEncoding('utf8');  
            res.on('data', function (chunk) {  
               successcb(chunk);  
            });  
        });  
          
        req.on('error', function (e) {  
            failurecb(e.message) 
        });  
          
        req.write(content);  
          
        req.end();  
    }
};