const fs = require('fs');
const path = require('path');


module.exports = (dir, ext, callback) => {
  let data;
  let err = null;

  fs.readdir(dir, (error, list) => {
    if(error) return callback(error);
    data = list.filter(file => {
      return path.extname(file) === '.' + ext;
    
    });
    callback(null, data);
  });
  
};



     // var fs = require('fs')  
     // var path = require('path')  
       
     // module.exports = function (dir, filterStr, callback) {  
       
     //   fs.readdir(dir, function (err, list) {  
     //     if (err)  
     //       return callback(err)  
       
     //     list = list.filter(function (file) {  
     //       return path.extname(file) === '.' + filterStr  
     //     })  
       
     //     callback(null, list)  
     //   })  
     // }  
