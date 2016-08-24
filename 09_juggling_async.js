// 09_juggling_async.js
//   This problem is the same as the previous problem (HTTP COLLECT) in that  
//   you need to use http.get(). However, this time you will be provided with  
//   three URLs as the first three command-line arguments.  
   
//   You must collect the complete content provided to you by each of the URLs  
//   and print it to the console (stdout). You don't need to print out the  
//   length, just the data as a String; one line per URL. The catch is that you  
//   must print them out in the same order as the URLs are provided to you as  
//   command-line arguments.  
   
//  ─────────────────────────────────────────────────────────────────────────────  
   
//  ## HINTS  
   
//   Don't expect these three servers to play nicely! They are not going to  
//   give you complete responses in the order you hope, so you can't naively  
//   just print the output as you get it because they will be out of order.  
   
//   You will need to queue the results and keep track of how many of the URLs  
//   have returned their entire contents. Only once you have them all, you can  
//   print the data to the console.  
   
//   Counting callbacks is one of the fundamental ways of managing async in  
//   Node. Rather than doing it yourself, you may find it more convenient to  
//   rely on a third-party library such as [async](http://npm.im/async) or  
//   [after](http://npm.im/after). But for this exercise, try and do it without  
//   any external helper library.  

const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2,5);

var content = [];
var c = 0;

urls.forEach( (url, index) => {
  http.get(url, res => {
    // res.setEncoding("utf8");
    // res.on("data", data => content[index] += data);
    // res.on("end", () => {
    //   if(++c == 3) print();
    // });
    res.pipe(bl( (err, data) => {
      content[index] = data.toString();
      if(++c == 3) print();
    } ));
    
  });
});

function print(){
  console.log(content.join('\n'));
}


// 1.  ACTUAL:    "She'll be right boil-over also it'll be freo. As stands out like barbie mate he's got a massive kero. Trent from punchy blue to she'll be right snag. "
// 1.  EXPECTED:  "She'll be right boil-over also it'll be freo. As stands out like barbie mate he's got a massive kero. Trent from punchy blue to she'll be right snag. "

// 2.  ACTUAL:    "Built like a sheila also he's got a massive muster. Mad as a larrikin how gutful of jillaroo. "
// 2.  EXPECTED:  "Built like a sheila also he's got a massive muster. Mad as a larrikin how gutful of jillaroo. "

// 3.  ACTUAL:    "He hasn't got a parma no worries you little ripper roo bar. Watch out for the no dramas to as cross as a postie. Grab us a sook flamin she'll be right fairy floss. Gutful of thongs mate grab us a hottie. "
// 3.  EXPECTED:  "He hasn't got a parma no worries you little ripper roo bar. Watch out for the no dramas to as cross as a postie. Grab us a sook flamin she'll be right fairy floss. Gutful of thongs mate grab us a hottie. "

// 4.  ACTUAL:    ""
// 4.  EXPECTED:  ""


// ────────────────────────────────────────────────────────────────────────────────
  
//      var http = require('http')  
//      var bl = require('bl')  
//      var results = []  
//      var count = 0  
       
//      function printResults () {  
//        for (var i = 0; i < 3; i++)  
//          console.log(results[i])  
//      }  
       
//      function httpGet (index) {  
//        http.get(process.argv[2 + index], function (response) {  
//          response.pipe(bl(function (err, data) {  
//            if (err)  
//              return console.error(err)  
       
//            results[index] = data.toString()  
//            count++  
       
//            if (count == 3)  
//              printResults()  
//          }))  
//        })  
//      }  
       
//      for (var i = 0; i < 3; i++)  
//        httpGet(i)  
   

