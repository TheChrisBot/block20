const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const rootElement = document.getElementById("root");
  const h1Element = document.createElement("h1");
  rootElement.appendChild(h1Element);


const ulElement = document.createElement("ul");
for (let i = 0; i < users.length; i++){
  const liElement = document.createElement("li");
  liElement.textContent = `${users[i].name}, ${users[i].age}, ${users[i].occupation}`;
  ulElement.appendChild(liElement);
}
rootElement.appendChild(ulElement);
}

console.log(users);

//call the main function
main();
