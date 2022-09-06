const commentsApi = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
}
commentsApi();