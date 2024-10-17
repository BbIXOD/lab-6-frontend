'use strict'

const displayUsers = (json) => {
    console.log(json)
}

const fetchUsers = (count) => {
    fetch(`https://randomuser.me/api/?results=${count}`)
    .catch(_ => console.log('request rejected!'))
    .then(res => res.json())
    .then(displayUsers)
}

fetchUsers(2)