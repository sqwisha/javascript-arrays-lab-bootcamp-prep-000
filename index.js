// Add your functions and code here
var kitens = ['Milo', 'Otis', 'Garfeild'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.splice(0, 0, name);
  return kitens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function appendKitten(name) {
  var appendedKitten = kittens.push(name);
  return appendedKitten;
}

function destructivelyRemoveFirstKitten() {
  kittens.splice(0, 1);
  return kittens;
}