function loadUsersFinal(){
    fetch('https://jsonplaceholder.typicode.com/users')
.then(resp=>resp.json())
.then(data=>workingFunction(data))
}

function workingFunction(data){
    const ul = document.getElementById('players-list');
for(const user of data)
{
    console.log(user.name);
   
    const li =document.createElement('li');
   li.innerText = user.website;
   ul.appendChild(li);
}
}