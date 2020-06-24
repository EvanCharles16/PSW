function Footer() {
    let footerComponent = document.getElementById('footerdiv');
    footerComponent.innerHTML = '';

    axios.get('/components/Home/footer.html')
        .then(function (response) {
            footerComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            footerComponent.innerHTML = console.log(error);
        });
}

Footer()