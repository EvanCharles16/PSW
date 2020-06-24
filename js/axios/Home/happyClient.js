function Client() {
    let clientComponent = document.getElementById('happyClients');
    clientComponent.innerHTML = '';

    axios.get('/components/Home/happyClient.html')
        .then(function (response) {
            clientComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            clientComponent.innerHTML = console.log(error);
        });
}

Client()