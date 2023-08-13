/**
  @description Prints the numbers from 1 to 100.Instead of the 55 and 76 prints "Fizz".
 */
    var i;
    for (i = 1; i <= 100; i++) {
       var result = i === 55 || i === 76 ? "Fizz" : i;
        console.log(result);
    }
/**
 @description Prints the sum of all the numbers in the array.
 */
    var i;
    var result = 0;
    var arr = [3,5,7,6,-2];
    for (i = 0; i <= arr.length-1; i++) {
        result += arr[i];
    }
    console.log(result);

/**
 @description Returns the reverse of string.
 */
    var str = "abcdefg1111111";
    var result = str.split('').reverse().join('')

    console.log(result);

/**
 @description Prints only the even numbers of the given array.
 */
    var arr = [10,2,55,78,95,8,63,45,7,89,54,26,31];
    var i;
    var result = [];
    for (i = 0; i < arr.length; i++) {
        while(arr[i] % 2 === 0) {
        result.push(arr[i]);
        i++;
        }
    }
    console.log(result);

/**
 @description Prints only the numbers of this range 23-45.
 */
    var arr = [10,2,55,78,95,8,63,45,7,89,54,26,31];
    var i;
    var result = [];
    for (i = 0; i < arr.length; i++){
       while (arr[i] >= 23 && arr[i] <= 45) {
        result.push(arr[i]);
        i++;
       }
    }
    console.log(result);

/**
 @description Prints the number of the given string, if it can be converted to a number.
 */
    var str = "hdbvj5vd3be9";
    var arr = str.split('');
    var i;
    var num = [];
    for(i = 0; i < arr.length; i++) {
        if (arr[i] > 0 || arr[i] < 0){
           num.push(arr[i]);
        }
    }
    var result = num.join(',');

    console.log(result);

/**
 @description Prints the highest number of the given array.
 */
    var arr = [5503,2,0,78,95,3,2,5,67,5467,903,412];
    var i;
    var result = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] > result) {
            result = arr[i];
        }
    }
    console.log(result);

/**
 @description Prints all ‘a’ characters of the given string.
 */
    var str = "siadfnasoidfnaosidfnasodihfbaaa";
    var i;
    var arr = str.split('');
    var characters = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === 'a') {
            characters.push(arr[i]);
        }
    }
    var result = characters.join(',');

    console.log(result);

/**
 @description Prints out each character of the given string.
 */
    var str = "siadfnasoidfnaosidfnasodihfbaaa";
    var i;
    var arr = str.split('');
    var arr2 = [];
    for(i = 0; i < arr.length; i++){
         arr2.push(arr[i]);
    }
    var result = arr2.join(',');

    console.log(result);

/**
 @description Prints true if the string start and ends in the same character.
 */
    var str = "dfbikgbfkdnjilkf";
    var arr = str.split('');
    var i;
    var result = false;
    for(i = 0; i < arr.length; i++) {
        if(arr[0] === arr[arr.length-1]){
            result = true;
        }
    }
    console.log(result);

/**
 @description Prints true if the number is a power of two, false otherwise.
 */
    var number = 1024;
    var i;
    var result = false;
    for (i = 0; i < 100; i++) {
         if(number === (2 ** i)) {
             result = true;
         }
    }
    console.log(result);