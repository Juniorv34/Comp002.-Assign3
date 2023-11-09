let outputString = "#"
for (let x = 1; x < 5; x++) {
   console.log(outputString);
   outputString += "#";
}
for(let x = 4; x > 1; x--) {
    outputString = outputString.substring(0, x-1);
    console.log(outputString);
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
let pattern1 = "# # # #"
let pattern2 = " # # # #"
for (let i = 1; i <=8; i++) {
    if (i % 2 == 0) {
        console.log(pattern1);
    } else {
        console.log(pattern2);
    }
}