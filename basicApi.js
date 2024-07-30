
const randomUser = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(rest => rest.json())
    .then(data => displayRandomUser(data))
}
const displayRandomUser = (users)=>{
    console.log(users);
    const picture = document.getElementById('picture');
    const fullName = document.getElementById('name');
    const emailContact = document.getElementById('emailContact');
    picture.src = `${users.results[0].picture.medium}`;
    fullName.innerHTML = `${users.results[0].name.title} ${users.results[0].name.first + ' '+ users.results[0].name.last}`;
    emailContact.innerText = `${users.results[0].email}`;

}