/* Q.1] Take values of length & Breadth of a Rectangle from user and check if it's a Square. */
let length = prompt("Enter thelength  ");
length = Number.parseInt(length);
let breadth = prompt("Enter thelength : ");
breadth = Number.parseInt(breadth);
if (length == breadth) {
  console.log("The shape is a Square");
}
else {
  console.log("The shape is a Rectangle");
}