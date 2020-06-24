function FooterProduct() {
    let footerComponent = document.getElementById('footerdiv-product');
    footerComponent.innerHTML = '';

    axios.get('/components/Product/footer.html')
        .then(function (response) {
            footerComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            footerComponent.innerHTML = console.log(error);
        });
}

FooterProduct()