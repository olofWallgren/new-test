/**
 * Will generate a random number and pprint it into the DOM
 */
function printRandomNumber(){
const randomNumber = getRandomNumber();
addNumberToPage(randomNumber);
}
/**
 * Generates a random number and returns it
 * @returns {number} the random number that was generated
 */
function getRandomNumber(){
    const randomNumber = Math.random() * 100;
    return Math.round(randomNumber);
}
/**
 * Places the passed in number into the DOM along with a comma and space
 * @param {number} number 
 */
function addNumberToPage(number){
    const div = document.getElementById('box')
    div.append(number + ', ');
    console.log(number,div)
}
