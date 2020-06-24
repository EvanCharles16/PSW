function Hoodie() {
    let hoodieComponent = document.getElementById('hoodie');
    hoodieComponent.innerHTML = '';

    axios.get('/components/Product/hoodie.html')
        .then(function (response) {
            hoodieComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            hoodieComponent.innerHTML = console.log(error);
        });
}

Hoodie()