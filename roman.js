document.onkeypress = keyPress;

function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
    if(key == 13 || key == 3){
        e.preventDefault();
       convertToRoman();
    }
  }

function convertToRoman() {
  var inputFromUser = document.getElementById('inputFromUser').value; //input from user = Latin box
  var latinConverted = document.getElementById('romanLetters'); //Roman box
  var converted; // result from convertion-function
  numString = inputFromUser.toString();
  var lengthOfInput = numString.length;
  numArray = numString.split("");

//  console.log(parseInt(inputFromUser));

  var positionOne = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var positionTen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var positionHundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var positionThousand = ["", "M", "MM", "MMM", "MV", "V", "VI", "VII", "VIII", "IX"];
      
  if (parseInt(inputFromUser) <= 0) {
    converted = "Try again :)";
    alert("Did the Romans really do zeros and negativs?");
  } else if (numArray.length === 1) {
    converted = positionOne[numArray];
    latinConverted.style.borderTop = "3px solid #e7a61a";
  } else if (numArray.length === 2) {
    converted = positionTen[numArray[0]] + positionOne[numArray[1]];
    latinConverted.style.borderTop = "3px solid #e7a61a";
  } else if (numArray.length === 3) {
    converted = positionHundred[numArray[0]] + positionTen[numArray[1]] + positionOne[numArray[2]];
    latinConverted.style.borderTop = "3px solid #e7a61a";
  } else if (numArray.length === 4 && (parseInt(inputFromUser) <= 4999)) {
    converted = positionThousand[numArray[0]] + positionHundred[numArray[1]] + positionTen[numArray[2]] + positionOne[numArray[3]];
    latinConverted.style.borderTop = "3px solid #e7a61a";
  } else if (numArray.length === 4 && (parseInt(inputFromUser) >= 5000)) {
    converted = positionThousand[numArray[0]] + positionHundred[numArray[1]] + positionTen[numArray[2]] + positionOne[numArray[3]];
    latinConverted.style.borderTop = "3px solid white";
  } else if (numArray.length > 4) {
    alert("Sorry, only numbers between 1 and 9999");
  } 
  latinConverted.textContent = converted;
}


