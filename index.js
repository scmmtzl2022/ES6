/**
 * Variable
 */
var fruit = "apple";
{
  fruit = "banana";
  let itemCount = 1;  
  console.log(itemCount);
}
// console.log(itemCount);
console.log(fruit);

const PI1 = 3.14;
// PI = 3.1212;
console.log(PI1);

/**
 * Arrow key function
 */
var total1;
function count (a, b){
  total1 = a + b;
  return total1
}
count(1,2);
console.log( "Total :",total1);

/**
 * Arrow key function
 */ 

const greeting  =  () => {return 'Hello world!'};

const greetingSimple  =  () =>  'Hello ES6!';

const greetingES6  =  (name) =>  'Hello ' + name;

const greetingES6Under  =  _ =>  'Hello ' + _;

console.log(greetingES6Under('ES6'));

/**
 * Spread operator
 */
var actress = ["Wuit Yi", 'Khine'];
var actor = ["Kyaw", "Bo Bo"];

var artist1 = [actress, actor];
var artist1 = [...actress, ...actor];
var artist2 = [...actress, "May"];

console.log(artist2);

/**
 * Property Shorthand
 */
var name = "MTZL";
var age = 25;
var address = "YAngon";

var employee = {
     name,
     age,
     address,
}

console.log(employee);

/**
 * Object destructuring
 */

var employee = {name :"Ko Ko", age: 24,address: "Yangon"};

console.log(employee.name, employee.age , employee.address);
var {name: Ename,age,address} = employee;

 console.log(Ename, age, address);

/**
 * Module export, import
 */
import { today , PI} from "./commonModule.js";
import  Math  from "./calculation.js";

today();

var cal1 = new Math();

console.log(today())

console.log("PI :", PI)
console.log(cal1.sum(4,1));

/**
 * async , await
 */
console.log(1);
console.log(2);
console.log(3);
setTimeout (()=> {
    console.log(3);
},2000)

setTimeout (()=> {
  console.log(4);
},3000)

console.log(4);


/**
 * callback
 */
let total = "";

function add (a,b,callback, error){
    setTimeout( () => {
        if( typeof a === "number" && typeof b === "number"){
        total = a + b;
        // callback(total);
        }else{
            let err= " a and b should be number."
            error(err);
        }
    },2000) 
}

add(3,2, (total) => {
    console.log(total);
}, (err) => {
    console.log(err);
})

add(2,2)
setTimeout( () =>{
console.log(total);
}, 3000)

/**
 * promise
 */
function balancePromise (a,b){
    return new Promise( (reolve, reject) => {
            if( typeof a === "number" && typeof b === "number"){
                setTimeout( () => {
                    let result = a + b;
                    reolve(result);
                }, 3000);
            }else{
              let err = "and b should be error"  
            reject(err);
            }    
    })
}
balancePromise(2,"he").then((result)=>{
 console.log(result)
} 
).catch(
    (err) => {
    console.log(err)
    }
)

/**
 * async await
 */
function balance (a,b){
  return new Promise( (reolve, reject) => {
          if( typeof a === "number" && typeof b === "number"){
              setTimeout( () => {
                  let result = a + b;
                  reolve(result);
              }, 3000);
          }else{
            let err = "and b should be error"  
          reject(err);
          }    
  })
}

async function showBalance(){
    let show = await balance( 1000, 1000);
    console.log(show);
}
showBalance();
    

/**
 * for of
 */
var income = [ "salary", "pocketMoney", "bonus" ]
let showbalance = "";
for ( let count of income){
    showbalance += income ;
    console.log(count);
}

/**
 * Map
 */
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits.get("oranges"));

const family = new Map([["maymay",1], ["paypay", 2]]);
console.log(family.get("maymay"))

const item = new Set();
item.add("book")
item.add("ballpin")

console.log(item)

/** ES6 class, template of object */
class Car {
    constructor( name, year){
        this.name = name ;
        this.year = year ;
    }
}

const firstCar = new Car( "Frad", 2013);
const secondCar = new Car ( "HondaFIt", 2018);
 
console.log ( "Name = " + firstCar.name + ". " + "Year = " + firstCar.year);

/**
 * Default Parameter Values
 */

function paramValue(x, y){
    let res = x + y;
    return res;
}
paramValue(1,2);
/**
 * Function Rest Parameter
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
 */
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x)

  const myArr = Array.from("ABCDEFG");
console.log(myArr);

/**
 *Array key
 */
 const vagitable = ["Banana", "Orange", "Apple", "Mango"];
 const keys = vagitable.keys();
 
 let text = "";
 for (let x of keys) {
   text += x + ",";
 }
 console.log(text)
/**
 * Array find()
 */
 const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

console.log(first);

function myFunction(value, index, array) {
  return value > 18;
}
/**
 * FindIndex()
 */
const number = [4, 9, 16, 25, 29];
let clue = number.findIndex(myFunctionIndex);
console.log(clue);
function myFunctionIndex(value, index, array) {
  return value > 18;
}