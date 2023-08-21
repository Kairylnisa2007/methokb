  console.log("Hello world");

  //переменные и ключевые слова

//ESS 
var num = 5
console.log(num);

var firstname, lastname;
firstname = "Kairylnisa"
 lastname = "Pamiry kyzy"
 console.log(firstname, lastname);

//ES let cons - это ключевые слова;
//let-изменяемая
let w = 5
w = 2
console.log(w); //ответ: 2

//const-это не изменяемая
const c = 5
c = 3
console.log(c); //ответ: не изменяется т.е ошибко 

// у нас есть также ограничения или также как можно назвать название переменных как нельзя, 
// т.е правильные название для переменных
let test = "test"
let $ = "test"
let $test = "test"

let _ = 32
let _test = 32
let test_ = 32
let test_first = 32
let testFirst = 32
let num23 = 32

// НЕ правильные название для переменных

// let 23num = 32
// let let = 32
// let my-name = 32

// 8 types- определяет тип данных, а не название переменных.
// 

// const num = 10 //  num - NUMBER - число
// console.log( typeof num); // ответ: number

// const str = "hello" // text  это тип string
// console.log(typeof str);  //ответ: str 

// const boolFalse = false
// const boolTrue = true
// console.log( typeof boolFalse);  // это тип: booline
// let d 
// console.log(d) //undefined

//null
//symbol
//bigint

//array-массивы. У массива квадратные скобки
// const array = [1,2, 3, 4,5, "friends", ]
// console.log(array [3]); // индекст начинается с нуля


// внутри массива можно сделать массив
// const array = [[1,2, 3, ],[4,5,] ,["friends","true"], "kairylnisa"]
// console.log(array [3]); // там третий индекст слово "kairylnisa"
//  // также можем вводить длину
// console.log(array.length) // ответ: длина строку 4 

//object-объекты. У объекта будут фигурные скобки.
// const obj = {
//   key: "value",
// }
// const obj = {
// name: "Kairylnisa",
// age: 16
// }
// console.log(obj.name);


const user = {
  login:"Nisa",
  password:"password",
  userName:"Nisa",
  followers: [
    {
      userName: "Diana"
    },
    {
      userName: "Diana"
    }
  ],
   followes:[
    {
      userName: "Diana"
    },
    {
      userName: "Diana"
    },
    {
      userName: "Diana"
    }
  ],
  avator: "image"

}
console.log(user);
console.log("username:"+ user.userName);
console.log("followers:"+ user.followers.length);
console.log("followes:"+ user.followes.length);

// const number1 = 10
// number1 = 20
// console.log(number1); // const - не измняемая

let  number2 = 10
number2 = 20
console.log(number2); //  let - изменяемая

// конканетация

 const firstName = "Kairylnisa"
 const lastName = "Pamiry kyzy"
 const fullName = firstName + "\n " + lastName 

console.log(fullName); // Kairylnis Pamiry kyzy

//инторполация '${}'
// let message = 'hello, firstName'
// console.log(message); // ОТВЕТ: hello,firstName

let message1 = 'hello, ${firstName}' //  !!!! ТАМ ПРОБЛЕМА!!!!
console.log(message1);

// математические операторы: 
// = + - * / 
// ** пример:
//2**2 = 8

let b = 12
let v = 5
let p = 30
 
let n = b + p
let o = b - p
let m = b * p
let d = b / p
let s = b % p

let k = b + v
let a = b - v
let i = b * v
let r = b / v
let y = b % v
let l = b + v + p

let z = b ** v

console.log(n);
console.log(o);
console.log(m);
console.log(d);
console.log(s);

console.log(k);
console.log(a);
console.log(i);
console.log(r);
console.log(y);
console.log(l);

console.log(z);
p = p + b
console.log(p);
p+=b
console.log(p); //   !!!ТАМ ПРОБЛЕМА !!!


let nan = firstName / b
console.log(nan); // ответ: NAN - (not a number)

let e = "32"
console.log( typeof e); // "32" это тип ТЕКСТА т.е  STRING

let Q = 32
console.log( typeof Q); // 32 это тип НОМЕРА т.е  NUMBER

const fullAGE = 16
const birthYear = 2007
const currentYear = 2023

const isFullAge = currentYear - birthYear < fullAGE
console.log(isFullAge);  //   ответ: false


//  ==  ===  !=  !==
const num1  = '40'
const num2 = 40
console.log(num2 === num1); //  ответ:false

const num3  = '40'
const num4 = 40
console.log(num4 == num3);  //  ответ:true

const num5  = '40'
const num6 = 40
console.log(num6!== num5);  //  ответ:true

const mgs = "i love you"
console.log(!mgs);

// a)условные операторы  ? :            б) // условные ветвление


//условные операторы  ? :

//краткая форма:
// const time = prompt("Введите текст")
// if(time < 18)
// alert("Добрый день!")   
// // else{
//   alert("добрый вечер!")
// }


// //  НЕ краткая форма:
// if(time <12)
// alert("Доброе утро!")

// else if (time < 18)
// alert("Добрый день!")
// else if (time < 24)
// alert("Добрый вечер!")


const age = 16
switch(age) {
  case 15:
    console.log("you are teenager" );
    break;
   case 18:
      console.log("you are perfect age");
      break;
  default:
        console.log("please  center your valid age"); // ответ
}
console.log(age);
                        

let isFD = confirm("you are frontend developer")
alert(isFD)

const firstname = prompt("your  name")
const ages = prompt("your age")
const answer = "name:" + " " + firstname + "\n " + "age:" + " " + ages
alert(answer)

