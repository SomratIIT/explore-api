function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(r=>r.json())
    .then(json=>console.log(json))
}
function loadUsers()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=> displayUser(data))
}
function displayUser(data){
console.log(data);
}
