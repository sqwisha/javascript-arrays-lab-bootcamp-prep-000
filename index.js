// Add your functions and code here


function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.splice(0, 0, name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function appendKitten(name) {
  var appendedKitten = kittens.concat(name);
  return appendedKitten;
}

function destructivelyRemoveFirstKitten() {
  kittens.splice(0, 1);
  return kittens;
}

function prependKitten(name) {
  var prependedKitten = name.concat(kittens);
  return prependedKitten;
}

function removeLastKitten() {
  var removeLastKitten = kittens.splice(-0);
  return removeLastKitten;
}