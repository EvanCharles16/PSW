function Newsletter() {
    let newsletterComponent = document.getElementById('newsletterid');
    newsletterComponent.innerHTML = '';

    axios.get('/components/Home/newsletter.html')
        .then(function (response) {
            newsletterComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            newsletterComponent.innerHTML = console.log(error);
        });
}

Newsletter()