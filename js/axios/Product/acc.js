function Acc() {
    let accComponent = document.getElementById('acc');
    accComponent.innerHTML = '';

    axios.get('/components/Product/acc.html')
        .then(function (response) {
            accComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            accComponent.innerHTML = console.log(error);
        });
}

Acc()