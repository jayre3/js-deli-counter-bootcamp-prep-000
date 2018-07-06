
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  var i = katzDeliLine.length;
  var count = 0;
  if(count < i) {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  else {
    return "There is nobody waiting to be served!";
  }
}
