const randomUser = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayRendom(data))
}
randomUser();

const displayRendom = users =>{
    console.log(users.results[0].location.coordinates.latitude)
    const sectionContainer = document.getElementById('section-container')
    const div = document.createElement('div')
    div.innerHTML = `
        <img src=${users.results[0].picture.large} alt="">
        <h2>${users.results[0].location.country}</h2>
        <h3>${users.results[0].location.city}</h3>
        <h3>${users.results[0].location.street.name}</h3>
        <p>${users.results[0].location.coordinates.latitude}</p>
    `;
    sectionContainer.appendChild(div)

}
