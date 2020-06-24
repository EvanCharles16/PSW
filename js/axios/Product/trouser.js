function Trouser() {
    let trouserComponent = document.getElementById('trousers');
    trouserComponent.innerHTML = '';

    axios.get('/components/Product/trouser.html')
        .then(function (response) {
            trouserComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            trouserComponent.innerHTML = console.log(error);
        });
}

Trouser()