function dark() {
  document.getElementById("body").style.backgroundColor = "#222";
  document.getElementById("res").style.backgroundColor = "#333";
}
function light() {
  document.getElementById("body").style.backgroundColor = "#fff";
  document.getElementById("res").style.backgroundColor = "#fff";
}
function bigger() {
  document.getElementById("body").style.fontSize = "1.5em";
}
function smaller() {
  document.getElementById("body").style.fontSize = "unset";
}
function add() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
  var addition = Number(n1) + Number(n2);
  document.getElementById("result").innerHTML = addition;
}
function multi() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
  var multiply = Number(n1) * Number(n2);
  document.getElementById("result").innerHTML = multiply;
}
function sub() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
  var subtract = Number(n1) - Number(n2);
  document.getElementById("result").innerHTML = subtract;
}
function divid() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
  var division = Number(n1) / Number(n2);
  document.getElementById("result").innerHTML = division;
}
