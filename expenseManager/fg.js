/*
$(document).ready(function(){
		var myDiv =  $('.report');

        $("#savebutton").click(function(){
            var name = $("#name").val();
            var category = $("#category").val();
            var limit = $("#limit").val();
            var amount = $("#amount").val();
            var percentage = amount/limit * 100;
            if ($(percentage >= 80)) {
      			  error = "Warning! Your expense is more than 80% of the limit";
              $(".report").addClass("alert alert-warning").append(error);
            }
            var method = $("#method").val();
            var markup = "<tr><td>" + name + "</td><td>" + category + "</td><td>" + limit + "</td><td>" + amount +"</td><td>" + method; + "</td></tr>"
            $(".table").append(markup)
            if (amount > limit) {
              $(".table tr:last").animate({
                backgroundColor: "red"
                });
              }
        });
 }); 
*/


$(document).ready(function () {

  var list = [{ expname: "Food", items: [{ name: "Pizza", price: 200 }, { name: "Burger", price: 100 }], limit: 1000, amount: 300, method: "cash", expended: 30 },
  { expname: "Clothing", items: [{ name: "T-shirts", price: 200 }], limit: 4000, amount: 200, method: "cash", expended: 5 }];

  loadTheList();
  loadTheDropdown();

  $("#addexp").click(function () {
    var catl = $("#catname").val();
    var limitl = $("#limit").val();
    var methodl = $("#method").val();
    var newRow = { expname: catl, items: [], limit: Number(limitl), amount: 0, method: methodl, expended: 0 };
    list.push(newRow);
    loadTheDropdown();
    clearForms();
  });

  $("#savebutton").click(function () {
    var ename = $("#ename").val();
    var eamount = $("#amount").val();
    var cat = $("#categories").val();
    for (var i = 0; i < list.length; i++) {
      if (list[i].expname === cat) {
        list[i].items.push({ name: ename, price: Number(eamount) });
        list[i].amount += Number(eamount);
        list[i].expended = (list[i].amount / list[i].limit) * 100;
        if (list[i].expended >= 80 && list[i].expended < 100) {
          alert("Warning!! " + list[i].expname + " is reaching its limit");
        }
      }
    }
    loadTheList();
    clearForms();
  });

  function loadTheDropdown() {

    $("#categories").html("");

    for (var i = 0; i < list.length; i++) {
      var opt = "<option>" + list[i].expname + "</option>";
      $("#categories").append(opt);
    }
  }

  function clearForms() {
    $("#catname").val("");
    $("#limit").val("");
    $("#method").val("");
    $("#ename").val("");
    $("#amount").val("");
    }

  function loadTheList() {
    // Creates the list by traversing through the list object .
    $("#expense").html("");

    for (var i = 0; i < list.length; i++) {
      if (list[i].amount !== 0) {
        var itemList = "";
        for (var j = 0; j < list[i].items.length; j++) {
          itemList += "<div>" + list[i].items[j].name + " - " + list[i].items[j].price + "</div>";
        }
        if (list[i].expended > 100)
        { var markup = "<tr class = 'err'><td>" + list[i].expname + "</td><td>" + itemList + "</td><td>" + list[i].limit + "</td><td>" + list[i].amount + "</td><td>" + list[i].method + "</td><td>" + list[i].expended + "%</td></tr>"; }
        else
        { var markup = "<tr><td>" + list[i].expname + "</td><td>" + itemList + "</td><td>" + list[i].limit + "</td><td>" + list[i].amount + "</td><td>" + list[i].method + "</td><td>" + list[i].expended + "%</td></tr>"; }
        $("#expense").append(markup);
      }
    }
  }
});

