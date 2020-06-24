function Shoes() {
    let shoesComponent = document.getElementById('shoes');
    shoesComponent.innerHTML = '';

    axios.get('/components/Product/shoes.html')
        .then(function (response) {
            shoesComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            shoesComponent.innerHTML = console.log(error);
        });
}

Shoes()