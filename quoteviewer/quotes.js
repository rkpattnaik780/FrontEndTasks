var x = document.getElementById("disp") ;
var y = x.getElementsByTagName("p");
var qtes = [{person : "Steve Jobs ",
             say : "\"Everyone should learn to programme cause it teaches us how to think.\""},
{person : "Bill Gates", say : "\"Success is a lousy teacher. It seduces smart people into thinking they can't lose.\""},
 {person : "Mark Zuckerberg", say : "\"I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.\""}] ;
y[0].innerHTML = qtes[0].say + " - " + 
  qtes[0].person;
function generate()
{
  var temp = Math.floor(3 * Math.random());
  y[0].innerHTML =  qtes[temp].say + " - " + 
  qtes[temp].person;
}
var btn = document.getElementById("clk");
btn.addEventListener("click",generate);