let inputName = ["Hal Mortimer", "Larry Gordon", "Mary Butterworth", "Jay Boyd"];
let firstName;
let lastName;

const nameParts = function(name) {
    let indexSpace = name.indexOf(" ");
    firstName = name.slice(0,indexSpace);
    lastName = name.slice(indexSpace + 1, name.length);
    console.log(`first name ${firstName}, last name ${lastName}`);
};

const reversedName = function() {
    console.log(`reversed name: ${lastName}, ${firstName}`);
};

const greeting = function() {
    console.log(`greeting: Dear ${firstName.substring(0, 1)}. ${lastName}`);
};

const processName = function(name) {
    console.log(`\nName being processed: ${name}`);
    nameParts(name);
    reversedName();
    greeting();
};

inputName.forEach(processName);
