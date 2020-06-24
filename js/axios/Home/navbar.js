function Navbar() {
    let navbarComponent = document.getElementById('topheader');
    navbarComponent.innerHTML = '';

    axios.get('/components/Home/navbar.html')
        .then(function (response) {
            navbarComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            navbarComponent.innerHTML = console.log(error);
        });
}

Navbar()