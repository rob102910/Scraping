
//For classes offered a Centre//
var s = document.createElement("script");
s.src = "http://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0];
body.after(s);

d3.selectAll("#main li").nodes().forEach(function(e){console.log(e.innerText)});
