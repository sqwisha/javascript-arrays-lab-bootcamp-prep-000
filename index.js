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