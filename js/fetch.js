// fetch('https://jsonplaceholder.typicode.com/todos/1') 
// //fetch function use kore api theke data niye ashe
//       .then(response => response.json())
// //convert it to json format
//       .then(json => console.log(json))
// //print json data


const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
.then(response => response.json())
.then(json =>console.log(json));