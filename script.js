'use strict'

const userContainers = document.querySelectorAll('div.person-data-container')
const statusIndicator = document.getElementById('status')

const addProperty = (propName, propValue, element) => {
    const boldPart = document.createElement('b')
    const valuePart = document.createElement('span')
    boldPart.innerText = propName + ':'
    valuePart.innerText = ' ' + propValue
    element.appendChild(boldPart)
    element.appendChild(valuePart)
    element.classList.add('flex-row')
}

const displayUsers = (json) => {
    const users = json.results
    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        const container = userContainers[i]
        container.textContent = '' // remove previous children
        
        const image = document.createElement('img')
        const city = document.createElement('div')
        const country = document.createElement('div')
        const postcode = document.createElement('div')
        const email = document.createElement('div')

        image.src = user.picture.large
        image.classList.add('keep-ratio')

        addProperty('Місто', user.location.city, city)
        addProperty('Країна', user.location.country, country)
        addProperty('Поштовий код', user.location.postcode, postcode)
        addProperty('Електронна пошта', user.email, email)

        container.appendChild(image)
        container.appendChild(city)
        container.appendChild(country)
        container.appendChild(postcode)
        container.appendChild(email)
        statusIndicator.innerText = 'Дані показано. Натисніть ще раз для заміни'
    }
}

const fetchUsers = (count) => {
    statusIndicator.innerText = 'Завантажуємо дані...'
    fetch(`https://randomuser.me/api/?results=${count}`)
    .catch(_ => statusIndicator.innerText = 'Помилка при завантаженні. Спробуйте ще раз пізніше')
    .then(res => res.json())
    .then(displayUsers)
}