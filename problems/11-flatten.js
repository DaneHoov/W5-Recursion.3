/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  let newArr = []

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i]

      if (Array.isArray(el)) {
        helper(el);
      } else {
        newArr.push(el)
      }
    }
  }
  helper(arr);
  return newArr;
  // if (arr.length === 0) return []

  // for (let i = 0; i < arr.length; i++) {
  //   let el = arr[i]

  //   if (arr.isArray(el)) {
  //     flatten(el)
  //   }
  //   newArr.push(el)
  // }
  // return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
