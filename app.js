//           (chapter 21 to 25)

// (Task 1)
// var fstName = prompt("Enter Your First Name");
// var lstName = prompt("Enter Your Last Name");
// var fulName = document.write("Welcome on our website " + fstName + " " + lstName );

// (Task 2)           ***************Incomplete*****************
// var favMob = prompt("Enter your favorite mobile phone model");
// var favMobLength = favMob.length
// document.write("My favourite phone is: " + favMob + "<br>" + "Length of string: " +  favMobLength);

// (Task 3)
// var str = "Pakistani";
// var strLength = str.length;
// document.write("String: Pakistani" + "<br>");
// for(var i = 0; i < strLength; i++){
//        if(str.slice(i, i + 1) === "n"){
//               document.write("Index of 'n': " + i )
//               break
//        }
// }

// (Task 4)
// var HeWl = "Hello World"
// document.write("String: " + HeWl + "<br>");
// var lstIndex = HeWl.lastIndexOf("l")
// document.write("Last index of 'l': "  + lstIndex);

// (Task 5)
// var str = "Pakistani";
// document.write("<h1>" + "String: Pakistani" + "<br>");
// var thirdIndex = str.slice(3,4);
// document.write("Character at index 3: " + thirdIndex + "</h1>" );

// (Task 6)  Skipped


// (Task 7)
// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// var cityReplace = city.replace(" Hyderabad"," Islamabad");
// document.write("After replacement: " + cityReplace);

// (Task 8)
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var mesgReplace = message.replace(/and/g,"&");
// document.write(mesgReplace);

// (Task 9)
// var str = "472";
// document.write("Value: " + str + "<br>")
// document.write("Type: String " + "<br>" + "<br>")
// var num = parseInt(str);
// document.write("Value " + num + "<br>")
// document.write("Type: number " + str + "<br>")

// (Task 10)
// var input = prompt("Which Dry Fruits","Peanuts");
// document.write("User input: " + input + "<br>")

// var outputCapital = input.toUpperCase();
// document.write("Upper Case: " + outputCapital + "<br>")

// (Task 11)
// var inputLan = prompt("Programing Language","javascript");
// document.write("User input: " + inputLan + "<br>")

// var firstChar = inputLan.slice(0,1);
// firstChar = firstChar.toUpperCase();

// var otherChars = inputLan.slice(1)

// document.write("Title case: " + firstChar + otherChars + "<br>")

// (Task 12)
// var num = 33.36;                       Skipped

// (Task 13)


// (Task 14)
// var items = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("Welcome to our bakery,Search item","cake");
// search = search.toLowerCase();

// for(i = 0; i <= items.length; i++){
//        if(search === items[i]){
//               document.write(items[i] + " is available at index " + i + " in our bakery")
//        }
//        else{
//               document.write("We're sorry. " + search + " is not available in our bakery")
//        }
//        break
// }

// (Task 15) skipped 


// (Task 16)
// var uni = "University of Karachi"
// const words = uni.split('');
// for(i = 0; i < uni.length; i++){
//        document.write(words[i] + "<br>");
// }

//         // (Task 17)
// var input = prompt("Your Country Name","Pakistan");
// document.write("User input: " + input + "<br>")
// // var lastChar = input.length
// for(i = 0; i < input.length; i++){
//        if(input[i] === "n"){
//               document.write("Index of 'n': " + i)
//        }
// }

//          (Task 18)
// var para = "The quick brown fox jumps over the lazy dog";
// para = para.toLowerCase();


//           (chapter 26 to 30)

//          (Task 1)

// var positiveInteger = +prompt();
// document.write("number: " + positiveInteger + "<br>");

// var roundOff = Math.round(positiveInteger)
// document.write("round off value: " + roundOff + "<br>");

// var floor = Math.floor(positiveInteger)
// document.write("floor value: " + floor + "<br>");

// var ceil = Math.ceil(positiveInteger)
// document.write("ceil value: " + ceil + "<br>");

//          (Task 2)

// var negativeInteger = +prompt();


// var signConvert = negativeInteger.toString();

// var signCheck = signConvert.slice(0, 1);

// if (signCheck === "-") {
//     document.write("number: " + negativeInteger + "<br>");

//     var roundOff = Math.round(negativeInteger)
//     document.write("round off value: " + roundOff + "<br>");

//     var floor = Math.floor(negativeInteger)
//     document.write("floor value: " + floor + "<br>");

//     var ceil = Math.ceil(negativeInteger)
//     document.write("ceil value: " + ceil + "<br>");
// }
// else {
//     alert("Please enter negative value")
// }

//          (Task 3)

//          (Task 4)
// var dice = Math.random() * 6;
// var diceValue = Math.ceil(dice);
// var diceResult = 2;
// document.write("Random dice value: " + "  " + diceValue + "<br>"  + "<br>")

// var dice = Math.random() * 6;
// var diceValue = Math.ceil(dice);
// var diceResult = 2;
// document.write("Random dice value: " + "  " + diceValue + "<br>")

//          (Task 5)
// var coin = Math.random() * 2;
// var coinValue = Math.ceil(coin);
// if(coinValue === 1){
// document.write(coinValue + "<br>"  + "random coin value: Heads" + "<br>")
// }
// else if(coinValue === 2){
// document.write(coinValue + "<br>"  + "random coin value: Tails")
// }

//          (Task 6)
// var randomNumGen = Math.random() * 100;
// var randomNum = Math.ceil(randomNumGen);
// document.write("random number between 1 and 100: " + randomNum);

//          (Task 7)
// var weight = prompt("Enter your weight","50 kgs");
// document.write("The weight of the user is " + weight);

//          (Task 8)
// var secretNum = 7;
// var guess = +prompt("Enter a number between 1 to 10");
// if(secretNum === guess){
//     alert("Whoohoo! You guess the right number")
// }
// else{
//     alert("Try Again")
// }

//           (chapter 26 to 30)

//          (Task 1)
// var date = new Date();
// document.write(date)

//          (Task 2)
// var date = new Date();
// months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
// currentMonth = date.getMonth();
// alert("Current Month: " + months[currentMonth])

//          (Task 3)
// var date = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = date.getDay();
// alert("Today is " + dayNames[day])

//          (Task 4)
// var date = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = date.getDay();
// var currentDay = dayNames[day];
// alert("Today is " + dayNames[day])
// if(currentDay === ("Sun"||"Sat")){
//     document.write("It's Fun Day");
// }

//          (Task 5)
// var date = new Date();
// var dateNum = date.getDate();
// if(dateNum < 16){
//     document.write("First 15 Days of The Month");
// }
// else{
//     document.write("Last 15 Days of The Month");
// }

//          (Task 6)
