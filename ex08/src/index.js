function myMutation(arr) {
    var word = arr[0].toLowerCase();
    var word2 = arr[1].toLowerCase();
    for (var i = 0; i < word2.length; i++) {
        if (word.indexOf(word2[i]) === -1) return false;    }

return true;
}
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;