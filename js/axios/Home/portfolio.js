function Portfolio() {
    let portfolioComponent = document.getElementById('portfoliodiv');
    portfolioComponent.innerHTML = '';

    axios.get('/components/Home/portfolio.html')
        .then(function (response) {
            portfolioComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            portfolioComponent.innerHTML = console.log(error);
        });
}

Portfolio()