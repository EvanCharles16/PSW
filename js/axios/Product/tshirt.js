function Tshirt() {
    let tshirtComponent = document.getElementById('tshirt');
    tshirtComponent.innerHTML = '';

    axios.get('/components/Product/tshirt.html')
        .then(function (response) {
            tshirtComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            tshirtComponent.innerHTML = console.log(error);
        });
}

Tshirt()