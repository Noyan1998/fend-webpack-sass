let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = 'a2adda676ea3cad6bbeba93ebfcbba31';

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")
    fetch(baseURL + formText + '&appid=' + apiKey + '&units=imperial')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
