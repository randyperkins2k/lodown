'use strict';

// YOU KNOW WHAT TO DO //

/**
* identity: Returns any given value unchanged.
* 
* @param {any data type} valueOne: The given value.
* @return {any data type} valueOne: Returns value unchanged.
*/
function identity(valueOne) {
    return valueOne;
}
module.exports.identity = identity;

/**
* typeOf: Returns any data type value as a string which names that
* data type.
* 
* @param {any data type} valueOne: A given value.
* @return {string} (result of typeof applied to valueOne): Returns a string 
* identifying the given data type.
*/
function typeOf(valueOne) {
      if (Array.isArray(valueOne)) {
      return "array";
    } else if (valueOne === null) {
      return "null";
    } else {
      return typeof valueOne;
    }
}
module.exports.typeOf = typeOf;

/**
* first: Returns specific array values depending on the parameters passed
* through. If a given argument for <numberOne> is not given or not a number,
* the first element in the <arrayOne> is returned. If <numberOne> argument is a number
* less than the <arrayOne> length, the <numberOne> amount of <arrayOne> values is 
* returned, beginning with the first <arrayOne> value.
* 
* @param {array} arrayOne: Any given array.
* @param {number} numberOne: Any given number.
* @return {[] or any data type} [] or arrayOne element: Returns brackets if <arrayOne>
* is not an array, or returns an array element if <number> is not given or not a 
* number. Otherwise, it returns <numberOne> amount of elements in the array.
*/
function first(arrayOne, numberOne) {
      if (!Array.isArray(arrayOne) || (numberOne < 0) ) {
      return [];
    } else if (typeof(numberOne) !== "number" || numberOne === undefined) {
      return arrayOne[0];
    } else return arrayOne.slice(0, numberOne);
}
module.exports.first = first;

/**
* last: returns specific array values depending on the parameters passed
* through the function. If an argument for <numberOne> is not given or not a number,
* the last element in the <arrayOne> is returned. If <numberOne> argument is a number
* less than the <arrayOne> length, then the last <numberOne> amount of array elements are
* returned. If <numberOne> is greater than the array length, the whole array is
* returned!
* 
* @param {array} arrayOne: A given array.
* @param {number} numberOne: Any given number.
* @return {[] or any other data taype} [],arrayOne elements or arrayOne: Returns 
* an empty array if the array argument is not an array, or if the number argument
* is a negative number. If no number argument is given, then the last array element
* is returned. If the number argument is greater than the array length, the whole
* array is returned. Otherwise, the last <numberOne> array elements are returned.
*/
function last(arrayOne, numberOne) {
     if (!Array.isArray(arrayOne) || (numberOne < 0) ) {
        return [];
    } else if (typeof(numberOne) !== "number" || numberOne === undefined) {
        return arrayOne[arrayOne.length - 1];
    } else if (numberOne > arrayOne.length) {
        return arrayOne; 
    } else return arrayOne.slice(arrayOne.length - numberOne, arrayOne.length);
}
module.exports.last = last;

/**
* indexOf: returns a specific array index depending on whether <value> is a 
* value within the given array. If the value is not in the array, then the 
* function will return "-1". If the value does exist within the array, then that
* value at the array's index is returned.
* 
* @param {array} array: Any given array.
* @param {number} number: Any given number.
* @return {any data type} array element: Returns the value at that array's index, or
* "-1" if there is no instance of that value within <array>.
*/
function indexOf(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }  
    } return -1;
}
module.exports.indexOf = indexOf;

/** 
* contains: This function returns a Boolean statement depending on whether the
* given parameter <value> is contained within the given parameter <array>. If 
* the value is in the array, then 'true' is returned. If the value is not in the
* array, then the function returns false. This is accomplished using a ternary
* operator.
* 
* @param {array} array: Any given array.
* @param {any data type} value: Any given value.
* @return {Boolean} true or false: Returns Boolean value depending on whether
* <value> exists in <array>.
*/
function contains(array, value) {
    let result = false;
      for (var i = 0; i < array.length; i++) {
        result = value === array[i] ? true : result;
      } return result;
}   
module.exports.contains = contains;

/** 
* each: Designed to loop over a collection, Array or Object, and applies the 
 * action function to each value in the collection.
 * 
 * @param {array or object} collection: The (array or object) over which to iterate.
 * @param {function} action: The function to be applied to each value in the 
 * collection.
*/
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 
* unique: This function iterates over an array and returns a new array with any
* duplicates removed. It utilizes the 'indexOf' function, which returns a value
* that is defined as a parameter, and returns that value.
* 
* @param {array} array: An array containing some duplicated values.
* @return {array} array: A new array with the duplicated values removed!
*/
function unique(array) {
    const result = [];
        for (let i = 0; i <array.length; i++) {
            if (indexOf(result, array[i]) === -1) {
                result.push(array[i]);
            }
        } return result;
}
module.exports.unique = unique;

/** 
* filter: The 'filter' function calls a given function for each element within an
* array. If the element passes through the function as true, then each true 
* element is to populate a newly assigned array, which is then returned. 
* 
* @parameter {array} array: Any given array.
* @parameter {function} action: A function which passes through each element of
* the array.
* @return {array} array: A resulting array which contains all of the array
* elements which were passed through the given function and determined to be 
* true.
*/
function filter(array, action) {
    var result = [];
    each(array, function(element, index, arrayOne) {
        if (action(element, index, arrayOne)) {
            result.push(element);
        } 
    }); return result;
}
module.exports.filter = filter;

/** 
* reject: A function which performs a given function for each element in a 
* specified array, and returns a new array that contains only elements from the
* original array which were deemed false after being subjected to the function.
* The newly populated array of 'false' elements is then returned.
* 
* @parameter {array} array: Any specified array.
* @parameter {function} action: A function which, when invoked, passes elements
* through from the array.
* @return {array} array: A newly created array that contains only values 
* which the function deemed false.
*/
function reject(array, action) {
 var result = [];
    each(array, function(element, index, arrayOne) {
        if (!action(element, index, arrayOne)) {
            result.push(element);
        } 
    }); return result;
}
module.exports.reject = reject;

/** 
* partition: The partition function uses an array as well as a function for 
* parameters. The function called is to pass through each element within the 
* array. The result of each pass through will be stored in a resulting array
* which will consist of two sub-arrays: one which contains all the 'truthy' 
* values passed through the function, and another which contains all of the 
* 'falsy' values. Finally, the newly minted array will be returned.
*  
* @parameter {array} array: A defined array.
* @parameter {function} action: A function within which the array elements are
* to pass through.
* @return {array} array: A resulting array that contains two sub-arrays:
* one with exclusively 'truthy' values, and another with 'falsy' values.
*/
function partition(array, action) {
    const result = [[],[]];
        each(array, function(element, index, arr){
            if (action(element, index, arr)){
                result[0].push(element);
            }
        });
        each(array, function(element, index, arr){
            if (!action(element, index, arr)){
                result[1].push(element);
            }
        }); return result;
}
module.exports.partition = partition;

/** 
* map: The purpose of this function is to invoke a given function which acts 
* upon each element within a collection, be it an object or an array. It then 
* stores the returned values of the function invocation within a newly created
* array, which is itself returned at the end of the operation.
*   
* @parameter {array or object} collection: A defined array or object.
* @parameter {function} action: A declared function.
* @return {array} array: A new array with the returned values of the 
* function.
*/
function map(collection, action) {
    const result = [];
    each(collection, function(element, index, arr) {
          if (action(element, index, arr)) {
          result.push(action(element, index, arr));
          }
          });
              return result;
          }
module.exports.map = map;

/** _.pluck
* pluck: This function takes an array containing objects and checks each array
* object for correspondence with a given property parameter. The 'map' function 
* is to be invoked within this operation. A new array containing the values of
* the property for each array element, in this case each object, is returned.
* 
* @parameter {array} arr: An array consisting of objects.
* @parameter {any data type} prop: A given value to be tested on each array object.
* @return {array} array: A resulting array containing the new values.
*/
function pluck(arr, prop) {
   return map(arr, function(element) {
   return element[prop]; 
   });
   }
module.exports.pluck = pluck;

/** 
* every: This function employs a function within its operation which iterates 
* through any collection and returns values, which are to be analyzed in a 
* Boolean as well as a 'truthy'/'falsy' context. If the returned values of the 
* function to be used are all identified as true, then the result of 'every' 
* should return 'true'. If any value is determined false, the function should 
* return 'false'. However, if a function is not submitted as a parameter, then 
* the result is to be 'true' if the values are all 'truthy', and 'false' 
* otherwise!
*   
* @parameter {array or object} collection: A given array or object.
* @parameter {function} action: A declared function.
* @return {Boolean} true or false: A true or false statement resulting from the
* declared function acting on the given collection.
*/
function every(collection, action) {
    let newArray = [];
    each(collection, function(element, index, container){
        if (action === undefined && element !== false) {
        let result = true;
        newArray.push(result);
    } else if (action === undefined) {
        let result = false;
        newArray.push(result);
    } else if (action(element, index, container) === true) {
        let result = true;
        newArray.push(result);
    } else {
        let result = false;
        newArray.push(result);
    } return newArray;
    });
        if(newArray.includes(false)) {
        return false;
    } else {
      return true;
    }
    }
module.exports.every = every;

/** 
* some: The function 'some' evokes a given function and determines the Boolean
* values of the objects of any referenced collection, in a similar way to the 
* above 'every' function. Yet in this case if one value is deemed to be true or 
* 'truthy' in the collection, it is to return 'true'. Otherwise, the function 
* should produce 'false'. 
*  
* @parameter {array or object} collection: A given array or object.
* @parameter {function} action: A function to be passed through.
* @return {Boolean} true or false: A true or false designation depending on the result
* of the declared function. 
*/
function some(collection, action) {
    let newArray = [];
    each(collection, function(element, index, container){
         if (action === undefined && element) {
         let result = true;
         newArray.push(result);
       } else if (action === undefined) {
            let result = false;
            newArray.push(result);
       } else if (action(element, index, container) === true) {
            let result = true;
            newArray.push(result);
       } else {
            let result = false;
            newArray.push(result);
       } return newArray;
       });
         if(newArray.includes(true)) {
            return true;
       } else {
            return false;
       }
       }
module.exports.some = some;

/** _.reduce
* reduce: The 'reduce' function accepts a collection, a function, and a value 
* defined as a 'seed' as parameters. The invoked function is to pass the 
* parameters given as arguments, and return the value of the function call. 
* However, the invoked function should use the value of 'seed' as a starting
* value, and then with subsequent iterations the previous result value is to be
* used. If no value is given for 'seed', the function is to use the first 
* element of the collection as its 'seed'.
* 
* @parameter {array or object} collection: An array or object to be referenced.
* @parameter {function} actionOne: A function to be invoked.
* @parameter {any data type} seed: A value to be used for the first iteration of
* the function.
* @result {any data type} previousResult: A resulting value from the completion of the 
* invoked function.
*/
function reduce(collection, actionOne, seed) {
    var previousResult;
    each(collection, function(element, index, collection) {
          if (index === 0 && seed || seed === 0) {
          previousResult = seed;
          previousResult = actionOne(previousResult, element, index);
        } else if (index === 0 && !seed) {
          previousResult = collection[0];
        } else {
          previousResult = actionOne(previousResult, element, index);
        }
        });
          return previousResult;
        }
module.exports.reduce = reduce;

/** 
* extend: This function accepts a collection of objects as parameters, and when
* invoked, copies all of the properties each object onto the first object, in 
* the order in which they are passed. The function then returns the newly 
* modified first object!
* 
* @parameter: {objects} objN: Multiple objects.
* @return: {object} obj1: The first object in the group, with the 
* properties of each subsequent object assigned to the first.
*/
function extend(obj1, ...objs) {    
for (var i = 0; i < objs.length; i++ ) {
    Object.assign(obj1, objs[i]);
    }
    return obj1;
    }
module.exports.extend = extend;