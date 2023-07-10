function calculate() {
  var result = document.getElementById("result");
  var expression = result.value;

  try {
    var answer = eval(expression);
    result.value = answer;
  } catch (error) {
    result.value = "Error";
  }
}
function append(input) {
  var result = document.getElementById("result");
  result.value += input;
}
function clearResult() {
  var result = document.getElementById("result");
  result.value = "";
}
function backspace() {
  var result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}
