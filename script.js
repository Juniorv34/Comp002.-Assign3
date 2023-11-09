let outputString = "#"
for (let x = 1; x < 5; x++) {
   console.log(outputString);
   outputString += "#";
}
for(let x = 4; x > 1; x--) {
    console.log(outputString);
    outputString -= "#";
}
for(let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log("FizzBuss");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i)
    }
}