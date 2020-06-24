function Short() {
    let shortComponent = document.getElementById('shorts');
    shortComponent.innerHTML = '';

    axios.get('/components/Product/short.html')
        .then(function (response) {
            shortComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            shortComponent.innerHTML = console.log(error);
        });
}

Short()