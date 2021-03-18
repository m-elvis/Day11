function mySplice(arr1, arr2, n) {
    var prva = [...arr2];
    var druga = [];
    for (var i = 0; i < arr1.length; i++) {
      druga[i] = arr1[arr1.length - 1 - i];
    }
      prva.splice(n, 0, ...druga);
    return prva;
  }
  console.log(mySplice([1, 2, 3], [4, 5], 1));
  console.log(mySplice([1, 2, 3], [4, 5], 2));
  console.log(mySplice(["b", "c"], ["a", "d"], 1));
  console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
  module.exports = mySplice;