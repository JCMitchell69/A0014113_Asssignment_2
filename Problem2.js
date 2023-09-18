let password = prompt("Please type in a password");
let secondTry;

do {
  secondTry = prompt("Re-enter password")
}
while(password !== secondTry);