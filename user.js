const loadUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayProfile(data))
}
const displayProfile = (user) => {
    console.log(user)
    const profileDiv = document.getElementById('profile');
    profileDiv.innerText = ''
    const div = document.createElement('div');
    div.innerHTML = `
    <img src=${user.results[0].picture.large} width='200px'>
    <h1>${user.results[0].name.first} ${user.results[0].name.last}</h1>
    <h4>${user.results[0].location.street.number}, ${user.results[0].location.street.name}, ${user.results[0].location.city}.</h4>
    <h2>${user.results[0].location.country}</h2>
    <button>${user.results[0].email}</button>`
    profileDiv.appendChild(div);
}
loadUser();