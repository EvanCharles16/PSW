function Jacket() {
    let jacketComponent = document.getElementById('jacket');
    jacketComponent.innerHTML = '';

    axios.get('/components/Product/jacket.html')
        .then(function (response) {
            jacketComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            jacketComponent.innerHTML = console.log(error);
        });
}

Jacket()