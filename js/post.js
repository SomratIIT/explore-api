function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>displayPosts(data))
}
loadPosts();
function displayPosts(posts)
{ const postsContainer = document.getElementById('posts-container');
 for(const post of posts)
 {
    console.log(post);
    const div = document.createElement('div');
    div.innerHTML = `
    <h4>User-${post.id}</h4>
    <h5>Post: title-${post.title}</h5>
    <p>Post Description:${post.body}</p>
        `
       postsContainer.appendChild(div); 

 }
}