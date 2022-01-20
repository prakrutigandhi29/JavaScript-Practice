/*Ex-1 Write a function which receives a string, and returns a Promise.
The promise should resolve with the uppercase version of the string, 
but should reject if the string is null.*/

function upperCaseAsync(s) {
    // write your code here
    return new Promise((resolve,reject) => {
    	if(s==null)
        	reject("string is null");
        else
        	resolve(s.toUpperCase());
    });
}
upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!");
});

/*Ex-2 Write an async function which waits 500 milliseconds and then returns
the uppercase of a given string. Use the sleep function provided.*/

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function uppercaseString(s) {
    // your code goes here
    await sleep(500);
    return (s.toUpperCase());
}
uppercaseString("edward").then(console.log);

/* Ex-3 Create a class called Person which accepts the name of a person as a string,
 and his/her age as a number.The Person class should have a method called 
 describe which returns a string with the following syntax: "name, age years old". 
 So for example, if John is 19 years old then the function describe of his 
 object will return "John, 19 years old".*/

function Person(name, age){
    this.name=name;
    this.age=age;
    this.describe=function(){
        return this.name + ", " + this.age +" years old";
    }
}
var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());