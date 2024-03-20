let meter = document.getElementById("meter");
let feet = document.getElementById("feet");
let inches = document.getElementById("inches");
let cm = document.getElementById("cm");
let millimeter = document.getElementById("millimeter");
let yards = document.getElementById("yards");
let km = document.getElementById("km");
let miles = document.getElementById("miles");

function meterToOther(val) {
  feet.value = val * 3.2808;
  millimeter.value = val * 1000;
  inches.value = val * 39.37;
  cm.value = val / 0.01;
  yards.value = val * 1.0936;
  km.value = val / 1000;
  miles.value = val * 0.00062137;
}

function feetToOther(val) {
  meter.value = val / 3.2808;
  inches.value = val * 12;
  cm.value = val / 0.032808;
  millimeter.value = val * 304.8;
  yards.value = val * 0.33333;
  km.value = val / 3280.8;
  miles.value = val * 0.00018939;
}

function inchesToOther(val) {
  feet.value = val * 0.083333;
  meter.value = val / 39.37;
  cm.value = val / 0.3937;
  millimeter.value = val * 25.4;
  yards.value = val * 0.027778;
  km.value = val / 39370;
  miles.value = val * 0.000015783;
}

function cmToOther(val) {
  feet.value = val * 0.032808;
  meter.value = val / 100;
  inches.value = val * 0.3937;
  millimeter.value = val * 10;
  yards.value = val * 0.010936;
  km.value = val / 100000;
  miles.value = val * 0.0000062137;
}
function millimeterToOther(val) {
  feet.value = val / 304.8;
  cm.value = val / 10;
  meter.value = val * 1000;
  inches.value = val / 25.4;
  yards.value = val * 0.0010936133;
  km.value = val / 1000000;
  (miles.value = val / 1), 609, 344;
}

function yardsToOther(val) {
  feet.value = val * 3;
  inches.value = val * 36;
  cm.value = val / 0.010936;
  meter.value = val / 1.0936;
  millimeter.value = val * 914.4;
  km.value = val / 1093.6;
  miles.value = val * 0.00056818;
}

function kmToOther(val) {
  feet.value = val * 3280.8;
  inches.value = val * 39370;
  yards.value = val * 1093.6;
  cm.value = val * 100000;
  meter.value = val * 1000;
  millimeter.value = val * 1000000;
  miles.value = val * 0.62137;
}

function milesToOther(val) {
  feet.value = val * 5280;
  inches.value = val * 63360;
  cm.value = val / 0.0000062137;
  yards.value = val * 1760;
  km.value = val / 0.62137;
  meter.value = val / 0.00062137;
  millimeter.value = val * 1.609e6;
}

function convertToOthers(convertFrom, value) {
  switch (convertFrom) {
    case "meter":
      meterToOther(parseFloat(value));
      break;

    case "feet":
      feetToOther(parseFloat(value));
      break;

    case "inches":
      inchesToOther(parseFloat(value));
      break;

    case "cm":
      cmToOther(parseFloat(value));
      break;

    case "millimeter":
      millimeterToOther(parseFloat(value));
      break;

    case "yards":
      yardsToOther(parseFloat(value));
      break;

    case "km":
      kmToOther(parseFloat(value));
      break;

    case "miles":
      milesToOther(parseFloat(value));
      break;
  }
}
