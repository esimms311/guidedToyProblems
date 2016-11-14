// 1. Make a function called countDown that creates a string with
// each number from 10-1.
function countDown() {
  var ans = ''
  for(var i = 10; i > 0; i--) {
    ans += i;
  }
  return ans;
}

////POSSIBLE TOOLS////
//For loop
//While loop
//+=


// 2. Make a function called filler that creates an array of numbers from 1-10

function filler() {
  var ans = []
  for (var i = 1; i < 11; i++) {
    ans.push(i)
  }
  return ans;
}

////POSSIBLE TOOLS////
//For loop
//While loop
//.push()


// 3. Create a function called reverseArr that takes in an array as a
//////parameter and returns a reversed copy of that array.
function reverseArr(array) {
  return array.reverse()
}

////POSSIBLE TOOLS////
//For loop        //.push()
//While loop      //.unshift()
//.reverse()


// 4. Create a function called reverseStr that takes in a string as a
//////parameter and returns a reversed copy of that string.

  function reverseStr(str) {
    return str.split('').reverse().join('');
  }

////POSSIBLE TOOLS////
//For loop       //.split()
//While loop     //.join()
//.charAt()      //.unshift()
//.push()


//5. Create a function called evensOdds that takes in an array and returns
//////an array with two arrays inside it - one with all the even numbers
//////from that array and the other with all the odds

  function evensOdds(arr) {
    var ans = [[],[]];
    arr.map(function (i) {
      ans[i % 2].push(i);
    })
    return ans;
  }

////POSSIBLE TOOLS////
//For loop    //.push()
//While loop  //.unshift()
//.forEach()  //%
