function NavbarProduct() {
    let navbarComponent = document.getElementById('topheader-product');
    navbarComponent.innerHTML = '';

    axios.get('/components/Product/navbar.html')
        .then(function (response) {
            navbarComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            navbarComponent.innerHTML = console.log(error);
        });
}

NavbarProduct()