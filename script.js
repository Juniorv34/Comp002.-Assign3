let outputString = "#"
for (let x = 1; x < 5; x++){
   console.log(outputString);
   outputString += "#";
}
for(let x = 4; x > 1; x--){
    outputString = outputString.substring(0,-1);
    console.log(outputString);
}
