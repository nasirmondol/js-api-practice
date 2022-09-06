const commentsBtn = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))

}
commentsBtn();
const displayComments = comments =>{
    // console.log(comments)
    const sectionContainer = document.getElementById('section-container');
 
    comments.forEach(comment =>{
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
           <h2>${comment.name}</h2> 
           <h4>${comment.email}</h4>
           <button onclick="commentDetails(${comment.id})">Details</button>
        `;
        div.style.backgroundColor = 'orange';
        div.style.margin = '15px';
        div.style.padding = '10px';
        div.style.border = '2px solid grey';
        div.style.borderRadius = '8px';
        sectionContainer.appendChild(div)
    })
    // const commentsDiv = comments.map(comment =>{
    //     const div = document.createElement('div')
    //         div.classList.add('card')
    //         div.innerHTML = `
    //            <h2>${comment.name}</h2> 
    //            <h4>${comment.email}</h4>
    //            <p>${comment.body}</p>
    //         `;
    //         sectionContainer.appendChild(div)
    // })
}
const commentDetails =commentId =>{
    console.log(commentId);
    const url = `https://jsonplaceholder.typicode.com/comments?=${commentId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCommentDetails(data))
}

const displayCommentDetails = comment =>{
    // console.log(comment[0])
    const divContainer = document.getElementById('div-container')
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>Name: ${comment[0].name}</h3>
        <h5>Email: ${comment[0].email}</h5>
        <p>Description: ${comment[0].body}</p>

    `;
    divContainer.appendChild(div);
}