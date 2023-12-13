// javascript events: https://www.w3schools.com/js/js_events.asp

function init() {
  // 1. checking if function is executed properly
  console.log("function [init]: hello world") // indicator that init has been called



  // question 1.a.1 part1
  var date = document.getElementById("date")

  var js_date = new Date() // this will call the date/ time as of NOW 
  var yyyy = js_date.getFullYear();
  var mm = js_date.getMonth() + 1;
  var dd = js_date.getDate();

  // month js XXXX [1,2,3,4... 12] 
  // month js YES [0,1,2,3,4... 11] 
  // january --> 0 
  // december --> 11

  var date_string = dd + " / " + mm + " / " + yyyy
  console.log(yyyy, mm, dd, "combined string for date", date_string);

  date.value = date_string // "hello world"


  // question 1.a.1 part2
  var customerName = document.getElementById("customerName");
  customerName.focus();
}

window.onload = function () {
  init()
}

document.getElementById("book").onsubmit = function (e) {
  //document.getElementById("customerName").checkValidity()
  //document.getElementById("telNo").checkValidity()
  console.log("the form is valid", this.checkValidity())


  e.preventDefault();

}