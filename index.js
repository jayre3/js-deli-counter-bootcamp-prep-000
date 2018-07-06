
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}
var katzDeliLine = [];

function nowServing(katzDeliLine) {
  var i = katzDeliLine.length;
  var count = 0;
