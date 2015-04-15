
var Hogan = require('hogan.js');
var fs = require('fs');
var http = require('http');
var xv = require("xvideos");

exports.findVideos = function(req, res)
{
    var obj;
    var tag =  req.params.tag;
    console.log(tag);
    
   xv.search({k: tag, sort: "uploaddate", durf: "10min_more"}, function (err, res) {
  if (err) {
    return console.warn(err);
  }

           obj = res;
          console.log(obj);

        });

    res.json({

      result: "done"
      
    });
      

}




