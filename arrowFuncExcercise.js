//function double(arr) {
//    return arr.map(function(val) {
//      return val * 2;
//    });
//  }

const doubles = arr => arr.map(val => val * 2)

//function squareAndFindEvens(numbers){
//    var squares = numbers.map(function(num){
//      return num ** 2;
//    });
//    var evens = squares.filter(function(square){
//      return square % 2 === 0;
//    });
//    return evens;
//  }

const squareAndFindEvens = (numbers) => {
    var squares = numbers.map((num) => {
        return num ** 2;
    });
    var evens = squares.filter((square) => {
        return square % 2 === 0;
    });
    return evens;
}

const squareAndFindEvens2 = numbers2 => numbers2.map(num => num ** 2).filter(square2 => square2 % 2 === 0) 