let number =  Math.floor(Math.random() * 10) + 1;
console.log(number);
let choice;
choice = prompt("Try to choice my number between 1 and 10.")
while (number < 11){
	if (choice!= number){
  choice = prompt("Please choose again.")
    }
  else if(choice == number){
  alert("Great job")
  break;
  }
}