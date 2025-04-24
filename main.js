///////////////////////////////////////Problem Solving///////////////////////////////////////////////

//Number  1 :
let num =3;
console.log("You Entered:",num);



//Number  2 :
let x = 5
let y = 5
let sum = x + y
console.log("sum:", sum);



//Number  3 :
let a = 20
let b = 10
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



//Number  4 :
let l = 5
let w = 10
//المساحة=الطول*العرض
let area = l * w
console.log("Area:", area);


//Number  5 :
let radius = 10
//القطر
let diameter = 2 * radius
//المحيط
let circumference = 2 * 3.14 * radius
//المساحة
let Area = 3.14 * (radius * radius)
console.log("Diameter:", diameter);
console.log("Circumference:", circumference);
console.log("Area:", Area);



//Number  6 : 
let celsius = 100
let fahrenheit = (celsius * 9 / 5) + 32
console.log("Celsius:", celsius)
console.log("Fahrenheit",fahrenheit)



//Number  7 :
let fahrenhiet = 100
let celsuis = (fahrenhiet - 32) * 5 / 9
console.log("Fahrenhiet", fahrenhiet)
console.log("Celsuis:", celsuis)



//Number  8 :
let days = 373
let years = Math.floor(days / 365)
let remainingDays = days % 365
let weeks = Math.floor(remainingDays / 7)
let finalDays = remainingDays % 7
console.log("Years:", years)
console.log("Weeks:", weeks)
console.log("Days:",finalDays)




//Number  9 :
let n = 5
let c = 3
let output = n**c
console.log("Output:",output)




//Number  10 :

let Number = 144
let squareRoot=Math.sqrt(Number)
console.log("Square root:",squareRoot)




//Number  11 :
let fangel = 60//دى الزاوية الاولى 
let sangel = 30//دى الزاوية التانية
let twoAngels = fangel + sangel//دا مجموع الزاويتين
let thangel = (180 - twoAngels)//دى بقا الزاوية التالتة
console.log(thangel)//و شكرا




//Number  12 :
let base = 10
let height = 15
let theArea = (base * height) / 2
console.log(theArea)




//Number  13 :
let side = 75
let thearea= (Math.sqrt(3)/4)*side*side
console.log(thearea)





//Number  14 :
let t = 95, u = 76, f = 58, o = 90, d = 89
let totalMarks = t + u + f + o + d
let averageMarks = totalMarks / 5
let percentage = (totalMarks / 500) * 100
console.log("Total Marks:", totalMarks)
console.log("Average Marks:", averageMarks)
console.log("Percentage:",percentage)




//Number  15 :
let v = 10, h = 12
if (h > v) {
    console.log(`${h} is a maximum`)
} else {
    console.log(`${v} is a maximum`)
};




//Number  16 :

//ملحوظة صغنونة الكود الرخم ده بيطلع اكبر رقمين مش اكبر رقم وانا قرفت منه ف خلاص مش هحاول معاه تاني
//Skip اللى بعده يلا
let g = 10, r = 12, k = 15
if (k > g && k>r) {
    console.log(`${k} is a maximum`)
}else if(r>g&&r>k) {
    console.log(`${r} is a maximum`)
} else {
    console.log(`${g} is a maximum`)
}





//Number  17 :
let number = -5
if (number > 0) {
    console.log(`${number} is a positive num`)
} else if (number < 0) {
    console.log(`${number} is a negative`)
} else {
    console.log("The number is 0")
};





//Number  18 :
let theNum = 55
if (theNum%5===0 &&theNum%11===0 ) {
    console.log(` Number is divided by 5 and 11`)
} else {
    console.log(`Number is Not divided by 5 and 11`)
};



//Number  19 :
let year = 2004
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("سنة كبيسة")
} else {
    console.log("سنة عادية")
}




//Number  20 :
let character = "b"
if (character >= "a" && character <= "z" || character >= "a" && character <= "Z") {
    console.log(" Character is an Alphabet. ")
} else {
    console.log(" Character is Not an Alphabet. ")
}



//Number  21 :

let Alphabet = "a"

if (Alphabet === "a" ||
    Alphabet === "e" ||
    Alphabet === "o" ||
    Alphabet === "y" ||
    Alphabet === "u" ||
    Alphabet==="i") {
    console.log("The Character is Vowel")
        
} else {
    
        console.log("The Character is consonant")
    }




//Number  22 :
//طلعت عيني بس حليتها فى الاخر 
let Character = "A"
if (Character >= "A" && Character <= "Z") {
    console.log("Character is Uppercase")
} else if (Character >= "a" && Character <= "z") {
    console.log("Character is Lowercase")
} else {
    console.log("It is not a Letter")
};




//Number  23 :
let dayNumber = 5;
if (dayNumber === 1) {
    console.log("Sunday")
} else if (dayNumber === 2) {
    console.log("Monday")
} else if (dayNumber === 3) {
    console.log("Tuesday")
} else if (dayNumber === 4) {
    console.log("Wednesday")
} else if (dayNumber === 5) {
    console.log("Thursday")
} else if (dayNumber === 6) {
    console.log("Friday")
} else if (dayNumber === 7) {
    console.log("Saturday")
}
else {
    console.log("Error")
};





// Number  24 :
let monthNumber = 2
if (monthNumber === 2) {
    console.log(`this month is february and it has 28 days or 29 days`)
}
else if ([1, 3, 5, 7, 8, 10, 12].includes(monthNumber)) {
    console.log(`this month is 31`)
}
else if ([ 4, 6, 9, 11].includes(monthNumber)) {
    console.log(`this month is 30`)
} else {
    console.log("Error")
}



//Number  25 :
let t1 = 10
let t2 = 20
let t3 = 30
if (t1 + t2 > t3 && t1 + t3 > t2 && t2 + t3 > t1) {
    console.log("The triangle is valid")
}else { 
    console.log("The triangle is not valid")
};


//Number  26 : نفس السؤال اللى فوق 

//Number  27 :
let tA = 5
let tB = 10
let tC = 15
if (tA === tB && tB === tC) {
    console.log("مثلث متساوي الساقين")
} else if (tA === tB && tB === tC && tA === tC) {
    console.log("مثلث متساوي الاضلاع")
} else { console.log("مثلث مختلف الاضلاع") };





//  Number  28 
let percentag = 40
if (percentag>=90) {
        console.log("A")
} else if (percentag >= 80) {
    console.log("B")
} else if (percentag >= 70) {
    console.log("C")
} else if (percentag >= 40) {
    console.log("D")
} else if (percentag >= 35) {
    console.log("E")
}else if (percentag < 40) {
    console.log("F")
}else {
    console.log("انت ساقط يافاشل !!")
};




//Number  29 :

let weeknumber = 5
switch (weeknumber) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Error");
};




//Number  30 :
let month = 5
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8: 
    case 10:
    case 12:
        console.log("31 days")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days")
        break;
    
    case 2:
        console.log("28 or 29 days")
        break;
    default:
        console.log("Error");
};



//Number  31 :

let Letter = "a"
switch (Letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel")
        break;
    default:
        console.log("Consonant")
};


//Number  32 :
let num1 = 5
let num2 = 10
switch(num1>num2) {
    case true:
        console.log(`${num1} is greater than ${num2}`)
        break;
    case false:
        console.log(`${num2} is greater than ${num1}`)
        break;
};

//Number  33 :
let num3 = 5
switch(num3%2===0) {
    case true:
        console.log(`${num3} is even`)
        break;
    case false:
        console.log(`${num3} is odd`)
        break;
};



//Number  34 :
let num4 = -5
switch (num4>0) {
    case true:
        console.log(`${num4} is positive`)
        break;
    case false:
        console.log(`${num4} is negative`)
        break;
};



//Number  35 :

let Num1 = 5
let Num2 = 10
let operation = "+"

switch(operation) {
    case "+":
        console.log(Num1 + Num2)
        break;
    case "-":
        console.log(Num1 - Num2)
        break;
    case "*":
        console.log(Num1 * Num2)
        break;
    case "/":
        console.log(Num1 / Num2)
        break;
    default:
        console.log("Error")
};
// axios.get(`https://dummyjson.com/products`)
//     .then(Response => {
//         console.log(Response.data.products);
//     }); 