let age = 23;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter.");
}



let isWeekend = true;
let isHoliday= false;
if (isWeekend || isHoliday) {
  console.log("You can rest today!");
}


let i=5;
// Using a while loop to print numbers from 1 to 5
for (i=1; i<=5; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }
}
// Using for loop to iterate through an array of fruits
let fruits = ["Apple", "Banana", "Mango"];
// Using traditional for loop to iterate through the fruits array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using for...of loop to iterate through the fruits array
for (let fruit of fruits) {
    console.log(fruit);
  }
  