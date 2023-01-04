// Function | Funktsiya



// Function yaratish uchun uni elon qilishimiz kerak

function ismi(argument) {
    // function (kodi) funksiyasi
}


/*
Funksiyalarni nomlash uchun kopincha mahsus sozlar mavjud 
misol ucun funksiyalar quydagi sozlarbilan boshlanadi:
'show...' - nimanidur korsatish funksiyasi
'get...' - nimanidur qaytarish funksiyasi
'calc...' - nimanidur hisoblash funksiyasi
'creat...' - nimanidur yaratish funksiyasi
'check...' - nimanidur tekshirish funksiyasi

misol
showMessage - habarni korsatish
getOptions - sozlamalr qabul qilish
calcSum - summani hisoblash
va hokazo
*/


// Decloration funksiyalar

// function showMessage() {
//     console.log('Hello Decloration Function');
// }

// showMessage()

// Expression funksiyalar

// let calcSum = function () {
//     console.log(3 * 2);
// }

// calcSum()

// Arrow Function

// let calcSum2 = () => console.log(3 * 3);

// calcSum2()



// Decloration funksiyalar

// let applePrice = 5
// let bananaPrice = 7

// function calcSum() {
//     let totalSum = applePrice + bananaPrice
//     return totalSum
// }

// console.log('Sizdan Jami: ' + calcSum());

// function calcSum(applePrice, bananaPrice) {
//     let totalSum = applePrice + bananaPrice
//     return totalSum
// }

// console.log('Sizdan Jami: ' + calcSum(5, 7));

// function calcSum2(banan, apple) {
//     let totalSum = banan + apple
//     return totalSum
// }
// let maxNum = 10
// console.log(calcSum2(1, maxNum));
// console.log(calcSum2(calcSum2(5, 2), calcSum2(7, 2)));


// funksiyani chaqirvotkanimizda unga argument jonatvomiz calcSum(sozlama)
// Sozlamalar cheksiz ravishda boladi
// Funksiyani ischida sozlamalar Argument deb ataladi
// Sozlamalar holagan malumot turida bolishi mumkin
// Biz sozlamalar uchun standart qiymatni ham o'rnatishimiz mumkin, agar bu sozlamalar funksiyaga kelmasa, ular ishlaydi
// Biz funksiyani o'zgaruvchiga ham qo'yishimiz mumkin va u funksiya natijasini oladi

// function calcSum3(banan = 5, apple = 7) {
//     let totalSum = banan + apple
//     return totalSum
// }

// let sumAnswer = calcSum3()
// let sumAnswer2 = calcSum3(20, 50)

// console.log(sumAnswer);
// console.log(sumAnswer2);

// Math | matematika bilan ishlash (matematicheskiy funksiya)
// Math.random() | random shakilda 0 dan 1 gacha bo'lgan tasodifiy kasr sonini qaytaradi (1 hech qachon qaytarmaydi)

// let random = Math.random()
// console.log(random);

// function random() {
//     return Math.floor(Math.random() * 15 + 1)
// }

// console.log(random());

// Math.random() * (maksimal raqam - minimal raqam) + minimal raqam

// Matematik Yahlitlash

// Math.floor() 
// sonni kichik tarafga yaxlitlaydi, masalan, 10.9 = 10 | -10.1 = -11

// Math.ceil()
// sonni katta tarafga yaxlitlaydi, masalan, 10.3 = 11 | -10.7 = -10

// Math.round() 
// agar qoldiq 5 dan kichkina bosa, sonni kichik tarafga yaxlitlaydi 5.4 = 5
// agar qoldiq 5 ga teng yoki kotta bosa, sonni kotta tarafga yaxlitlaydi 5.5 = 6

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}



let minNum = +prompt('Minimal Sonni kiriting')
let maxNum = +prompt('Maximal Sonni kiriting')

for (let i = 0; i < 5; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)
    let pr = +prompt('Misolni eching: ' + num1 + ' + ' + num2)
    let answer = num1 + num2 == pr ? 'Javob togri' : 'notogri'
    alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' Sizning Javobingiz ' + pr + '. ' + answer)
}