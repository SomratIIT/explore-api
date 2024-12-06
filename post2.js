function postShow()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(data =>postShowCall(data) )
}
postShow();
function postShowCall(users)
{ const container2 = document.getElementById('div-container2');
   for(const user of users)
   {
    console.log(user);
    const div = document.createElement('div');
    div.classList.add('user');
    div.innerHTML = `
    <h3>id:${user.id}</h3>
    <h5>Post: title-${user.title}</h5>
    <p>Post Description:${user.body}</p>
    `
    container2.appendChild(div);
   }
}