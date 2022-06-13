console.dir(document);

// Gives the domain of the webpage
console.log(document.domain);

// Gives the URL of the webpage
console.log(document.URL);

// THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMENTS

// // Gives the output of the title name in the console log
// console.log(document.title);

// // Gives the doc type of the html structure
// console.log(document.doctype);

// // Gives the doc type of the head tag
// console.log(document.head);

// // Gives the doc type of whatever is in the body tag
// console.log(document.body);

// // Gives all of the elements inside of the tree
// console.log(document.all);

// Selects all of the elements inside of the tree
// console.log(document.all[10]);

// Selects the text content and changes the header
// document.all[10].textContent = "The Seven Dwarfs"

// Selects all of the form tags which can be viewed in the console log through the DOM Inspector
// console.log(document.forms);

// Selects all of the link which can be viewed in the console log through the DOM Inspector
// console.log(document.links);

// Selects all of the images which can be viewed in the console log through the DOM Inspector
// console.log(document.images);

// // // // // // // // // 
// // GetElementByID // // 

// // 
// console.log(document.getElementById('header-title'));

// // 
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// // Selects the text content of the header and changes title and color
// headerTitle.textContent = "Changed the Title again"
// headerTitle.innerText = "It's Morbin Time"
// headerTitle.style.color = 'yellow';


// // // // // // // // // // // 
// // GetElementByClassName // // 

// // Puts all of the item elements in the console log by class name
// var items = document.getElementsByClassName('list-group-item');

// console.log(items);

// Selects the item by order number and changes the style of it.
// items[1].style.backgroundColor = 'yellow';
// items[1].style.fontWeight = 'bold';
// items[1].style.textContent = 'Cartoon';
// items[1].style.color = 'red';

// items[0].style.backgroundColor = 'orange';
// items[0].style.fontWeight = 'bold';
// items[0].style.textContent = 'Cartoon';
// items[0].style.color = 'blue';

// items[2].style.backgroundColor = 'brown';
// items[2].style.fontWeight = 'bold';
// items[2].style.textContent = 'Cartoon';
// items[2].style.color = 'black';

// items[3].style.backgroundColor = 'purple';
// items[3].style.fontWeight = 'bold';
// items[3].style.textContent = 'Cartoon';
// items[3].style.color = 'green';

// items[4].style.backgroundColor = 'tan';
// items[4].style.fontWeight = 'bold';
// items[4].style.textContent = 'Cartoon';
// items[4].style.color = 'white';

// items[5].style.backgroundColor = 'green';
// items[5].style.fontWeight = 'bold';
// items[5].style.textContent = 'Cartoon';
// items[5].style.color = 'purple';

// items[6].style.backgroundColor = 'blue';
// items[6].style.fontWeight = 'bold';
// items[6].style.textContent = 'Cartoon';
// items[6].style.color = 'tan';

// // a for loop that starts at the integar of 1 and is greater than or equal to 10. The i++ goes from increments of 1
// for (let i = 1; i <=10; i++ ) {
//     console.log(i);
// }

// // i+=2 is a fixed increment value that counts by two every time
// for (let i = 1; i <=20; i+=2) {
//     console.log(i);
// }

// // Starts at the value of 100 then decreases by increments of 2
// for (let i = 100; i >=0; i-=2) {
//     console.log(i);
// }

// // This is an arrary list full of strings which increases the increments by 1
// const myDwarfs = ['Joshy', 'Leedle', 'Poopy', 'Smelly', 'Bean', 'Donkae', 'Shrek'];
// for (let i = 0; i < myDwarfs; i++) {
//     console.log(i, myDwarfs[i]);
// }

// // 
// for(var i = 0; i < items.length; i++) {

//     items[i].style.backgroundColor = 'orange';
//     items[i].textContent = "List Items";
//     items[i].style.color = 'black';
// }


//////////////////////////GetElementsByTagName///////////////////////////////

// // Puts all of item elements in an index list. The '[]' tracks the specific list item.
// var li = document.getElementsByTagName('li');  

// console.log(li);
// console.log(li[1]);

// li[1].textContent= "Go Dawgs";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor= 'purple';
// li[1].style.color= 'yellow';

// // It calls all object variables and changes items if the change is met
// for (var i = 0; i < li.length; i++) {

//     li[i].style.backgroundColor = 'tan';
//     li[i].textContent = "My name is Bean and I love frijoles";
//     li[i].style.color = 'brown';
// }


/////////////////////////////// Query Selector ////////////////////////////////

// // Selects the main header with a '#' to specify the class which changes the style of the bottom border.
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px brown';

// // Changes value of the text box by selecting the input of the web page
// var input = document.querySelector('input');
// input.value = "I just changed the text value of the input box";

// // Selects the variable by class name (button) then is changed by the value
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "WE THE DWARFS";

// // Selects the class name and specifies the child number, then the variable is used to change the text color
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// // Selects the class name and specifies the child number, then the variable is used to change the text color
// var otherItem = document.querySelector('.list-group-item:nth-child(2)');
// otherItem.style.color = 'coral';



/////////////////////////////////////////////////////////////////////////


//  Declares all variables and selects all titles in the documents
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

// By using the 'nth' child, it grabs all of the odd and even items in the list
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

// this is a for loop that alters the variables. In this, it is applied for background color and text color.
for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor = 'tan';
    even[i].style.backgroundColor = 'brown';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
} 