//LOOP---A for loop is a control structure used to repeat a block of code a specific number of times.
//loop is also used to iterate over an Array.
//The for loop consists of three main parts: initialization, condition, and increment/decrement.
//for (initialization; condition; increment/decrement) {
//}
//----Real world use of for loop as follows
console.log("1---Iterating Over Arrays or Lists");
console.log("Traversing and manipulating elements in an array or list.");
let students = ["Huma", "Ayesha", "Sania", "Aima", "Sara"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
//--------------------------------------------------------------
console.log("\n");
console.log("2---Processing Data");
console.log("Reading and processing data from files, databases, or APIs.");
let values = [2, 3, 4, 5, 6, 7, 8];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log("Sum of Values = ", sum);
//--------------------------------------------------------------
console.log("\n");
console.log("Batch Processing");
console.log("Performing operations on a batch of items, such as sending emails, processing orders, or updating records.");
function sendEmails(email) {
    console.log(`Sending email to: ${email}`); // Assuming the function logs the email being sent
}
let emails = ["abc.com", "xyx.com", "qwe.com"];
for (let i = 0; i < emails.length; i++) {
    sendEmails(emails[i]);
}
//-------------------------------------------------------------
console.log("\n");
console.log("Filtering and Sorting Data");
console.log("Filtering and sorting data sets based on specific criteria");
let numbers = [2, 3, 4, 5];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
        console.log(`Even Numbers: ${evenNumbers}`);
    }
}
export {};
//-----------------------------------------------------------------
//and so on....
//Author-Huma Mohsin
