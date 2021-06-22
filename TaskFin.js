// /*
// 22. Skriv en funktion, som kan producere et givent antal af de første værdier fra fibonacci sekvensen (summen af de to forrige tal bliver til det næste tal).
//     F.eks. er produktionen af de første 7 tal 1, 1, 2, 3, 5, 8, 13.

//     Vis hvordan funktionen kan gøres til en metode i en class.

//     Beskriv koden med et flowchart og offentliggør den på et git repository.
// */

// function xFibonaci(amount) {
//     let fiboString = [1, ];
//     let xFibo = 1;
//     let val1 = 1;
//     let val2 = 1;
//     for (i = 0; i < amount-1; i++) {
//         fiboString.push(xFibo);
//         xFibo = val1 + val2
//         val2 = val1;
//         val1 = xFibo;
//     }
//     console.log(fiboString);
// }


// xFibonaci(10);


// var multi = {};

// function multiplyArray(array) {
//     for (var i = 0; i < array.length; i++) {
//         var num = array[i];
//         multi2[num] = num *2;
//     }
//     return multi
// }

// console.log(multiplyArray([1,2,3,4,5,6,7,8,9,10]))

//TASK 25
// var sort = {};

// function arraySort(array) {
//     for (var i = 0; i < array.length; i++) {
//         var num = array
//         sort[num] = num.sort()
//     }
//     return sort;
// }
// console.log(arraySort([4,3,6,2,7,1,5]))


//TASK 13

// function areSimilar (array) {
//     for (var i = 0; i < array.length; i++) {
       
//         var compare = array[0]


//         if (array[i] != compare)
//             return false;
        
//     }
//    return true;

// }
// console.log(areSimilar([1,1,1,1,1,1,1]))


//TASK 19
// function includeText(string){
//     //return string.includes("")
//     for (var i = 0; i < string.length; i++){
//         var include = "The"
        
//         if (string.includes(include))
//             return  "'"+ include + "'" + " is included in the string (" + string + ")"
    
//     }
//     return  "'"+ include + "'" + " is not included in the string (" + string + ")"

// }


// console.log(includeText("The time is now old friend"))






function anagramCheck (word, anagram) {

    for (i=0;i<word.length;i++){
        if (anagram.indexOf(word.charAt(i))== -1)
            return false;
    }
    for (i=0;i<anagram.length;i++){
        if(word.indexOf(anagram.charAt(i)) == -1)
            return false;
    }
    return true;

}

console.log(anagramCheck("kage mand", "agek andm"))