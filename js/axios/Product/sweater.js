function Sweater() {
    let sweaterComponent = document.getElementById('sweater');
    sweaterComponent.innerHTML = '';

    axios.get('/components/Product/sweater.html')
        .then(function (response) {
            sweaterComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            sweaterComponent.innerHTML = console.log(error);
        });
}

Sweater()