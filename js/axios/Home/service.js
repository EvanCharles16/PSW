function Service() {
    let serviceComponent = document.getElementById('serviceComponent');
    serviceComponent.innerHTML = '';

    axios.get('/components/Home/service.html')
        .then(function (response) {
            serviceComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            serviceComponent.innerHTML = console.log(error);
        });
}

Service()