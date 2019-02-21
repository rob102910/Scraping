//For majors,minors,professional programs, and academic offereings//
var s = document.createElement("script");
s.src = "http://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0];
body.after(s);

d3.selectAll(".fusion-text a").nodes().forEach(function(e){console.log(e.innerText)});

