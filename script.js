//start function when button is clicked
function printRandomNumber(){
const randomNumber = getRandomNumber();
addNumberToPage(randomNumber);
}
// Help function
function getRandomNumber(){
    const randomNumber = Math.random() * 100;
    return Math.round(randomNumber);
}
//helper function
function addNumberToPage(number){
    const div = document.getElementById('box')
    div.append(number + ', ');
    console.log(number,div)
}
