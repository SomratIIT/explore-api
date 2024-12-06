// fetch('https://jsonplaceholder.typicode.com/todos/1') 
// //fetch function use kore api theke data niye ashe
//       .then(response => response.json())
// //convert it to json format
//       .then(json => console.log(json))
// //print json data


// Again try
/*  const url = 'https://jsonplaceholder.typicode.com/todos/1';

 fetch(url)
 .then(response => response.json())
 .then(json =>console.log(json)); */

// Hudai function
/* function loadData(url2){
    fetch(url2)
    .then(response => response.json())
    .then(json =>console.log(json));
}
const url3 = loadData('https://jsonplaceholder.typicode.com/todos/1');
console.log(url3); */
const url = 'https://jsonplaceholder.typicode.com/todos/1';
function loadData()
{
    fetch(url)
    .then(response => response.json())
    .then(json =>console.log(json));
}


 