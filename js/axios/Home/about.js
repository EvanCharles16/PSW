function About() {
    let aboutComponent = document.getElementById('aboutus');
    aboutComponent.innerHTML = '';

    axios.get('/components/Home/about.html')
        .then(function (response) {
            aboutComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            aboutComponent.innerHTML = console.log(error);
        });
}

About()