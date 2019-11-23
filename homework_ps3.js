// 1) Create an iffe that returns an object with fields: function setValue(), function showValue()
// and function reverseValue(). Calling functions either logs the value or reverse it in an object.
// If value was not provided yet or is empty showValue function is to return information about that.
// ue can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.
// Closure pattern.

// let array = ["Informatyka", 5, "hello", "stonoga", false];

// for (let i = 0; i < array.length; i++) {
//   (function (iife) {
//     let value = undefined;

//     function setValue(newValue) {
//       value = newValue;
//     }

//     function showValue() {
//       console.log(value);
//     }

//     function reverseValue() {
//       if (typeof value === "number") {
//         value = value * -1;
//       } else if (typeof value === "string") {
//         return value.split("").reverse().join("");
//       } else {
//         console.error("Bad type: " + typeof value);
//       }
//     }

//     setValue(iife);
//     showValue();
//     reverseValue();
//     showValue();
//   })(array[i]);
// }

// 2) Create four function definitions. One for every basic math operations and taking two input
// parameters. Create one more function. This function is to return calculation object. This object
// is to have parameters object field that holds two operation parameters inside (x and y).
// Function field that points to a function with math operation (defined at the beginning).
// A function setOperation() that sets the field from previous sentence and a Calculate function
// that makes calculation and returns its value.

// function setOperation(x, y) {
//   this.x = x;
//   this.y = y;
//   let wynik;

//   function dodawanie() {
//     wynik = x + y;
//     return wynik;
//   }
//   function odejmowanie() {
//     wynik = x - y;
//     return wynik;
//   }
//   function mnożenie() {
//     wynik = x * y;
//     return wynik;
//   }
//   function dzielenie() {
//     wynik = x / y;
//     return wynik;

//   }
//   dodawanie();
//   console.log(wynik);

//   odejmowanie();
//   console.log(wynik);

//   mnożenie();
//   console.log(wynik);

//   dzielenie();
//   console.log(wynik);
// }

// setOperation(100, 2)

// 3) Create an array (by hand) of objects and call sum() function in context of each one of them.
// Sum function is to come from this object
// BaseObject = { X,y, sum: function (){ return this.X+this.y}}

// let BaseObject = {
//   x: 2,
//   y: 5,
//   getSum: function () {
//     return this.x + this.y
//   }
// }

// function Sumator(x, y) {
//   this.x = x;
//   this.y = y;
//   this.getSum = function () {
//     return this.x + this.y
//   }
// }

// let list = [new Sumator(2, 2), new Sumator(3, 4), new Sumator(8, 8)];

// for (let i = 0; i < list.length; i++) {
//   let element = list[i];
//   console.log(element.getSum());
// }

// 4) Given an array of objects, for each object call operation() function in context of next object.
// If object is last, got back to start of the array for operation function. In loop;

// let lista = [{
//   x: 1,
//   y: ' object one value',
//   operation: function () {
//     return 'object one prefix ' + this.x + this.y
//   }
// },
// {
//   x: 2,
//   y: ' object two value',
//   operation: function () {
//     return 'object two prefix ' + this.x + this.y
//   }
// },
// {
//   x: 3,
//   y: ' object three value',
//   operation: function () {
//     return 'object three prefix ' + this.x + this.y
//   }
// }
// ]

// for (let i = 0; i < lista.length; i++) {
//   let next = (i + 1) % 3;

//   resultOperation = lista[i].operation.bind(lista[next]);
//   console.log(resultOperation())
// }
