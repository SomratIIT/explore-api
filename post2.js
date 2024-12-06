function postShow()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(data =>postShowCall(data) )
}

function postShowCall(users)
{
   for(const user of users)
   {
    console.log(user);
   }
}