function learningAgain()
{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dataDekeAno(data))
}

function dataDekeAno(data)
{
    const ul = document.getElementById('abar-kori');
    for(const user of data)
    {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.username;
        ul.appendChild(li);
    }

}