var x = document.getElementById("disp");
var y = x.getElementsByTagName("p");
var tweet = document.getElementById("tweet");
var twit = document.getElementById("twit");
var qtes = [{
  person: "Steve Jobs ",
  say: "\"Everyone should learn to programme cause it teaches us how to think.\""
},
{ person: "Bill Gates", say: "\"Success is a lousy teacher. It seduces smart people into thinking they can't lose.\"" },
{ person: "Mark Zuckerberg", say: "\"I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.\"" },
{ person: "The Shawsank Redemption", say: "\"Get busy living or get busy dying.\"" },
{ person: "Star Wars", say: "\"May the force be with you.\"" },
{ person: "Forrest Gump", say: "\"My mama always said , life is like a box of chocolates.\"" },
{ person: "Jerry Maguire", say: "\"You had me at hello.\"" },
{ person: "Godfather", say: "\"We'll make him a deal he can't refuse.\"" },
{ person: "Titanic", say: "\"I feel like the king of the world .\"" },
{ person: "Classabanca", say: "\"Go ahead ! Make my day .\"" },
{ person: "Silver Linings Playbook", say: "\"Sunday is my favourite day again.\"" }];
y[0].innerHTML = qtes[0].say + " - " +
  qtes[0].person;
twit.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
  encodeURIComponent(qtes[0].say + " \n \t\t\t\t\t\t-" + qtes[0].person);
twit.target = "_blank";
function generate() {
  var temp = Math.floor(11 * Math.random());
  //y[0].innerHTML = 
  y[0].innerHTML = qtes[temp].say + " - " + qtes[temp].person;
  twit.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
    encodeURIComponent(qtes[temp].say + '\n \t \t\t \t \t\t- ' + qtes[temp].person);

}
var btn = document.getElementById("clk");
