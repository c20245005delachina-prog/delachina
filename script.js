console.log("Hello, World!");
console.log("From script.js file.");

const myName = "Cuennie";
let age = 19;
age = 20;
myNumber = 9462707644;
myaddress = "Manapla";

console.log(`My name is ${myName}, ${age} years old.`);
console.log(`Number: ${myNumber}`);
console.log(`Address: ${myaddress}`);

console.log(67);

function greet(greeting, names = []) {
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return`${greeting}, sa enyu ${names},`;
}

console.log(greet("Mayung aga" , ["Cuennie", " Bai", " Soy", " Tol", " Erp"]));

const heading = document.querySelector("h1");
heading.textContent = "Ernie Dela China";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectsHeading = document.querySelector("#services h2");
console.log(projectsHeading);





