function Contact() {
    let contactComponent = document.getElementById('contactdiv');
    contactComponent.innerHTML = '';

    axios.get('/components/Home/contact.html')
        .then(function (response) {
            contactComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            contactComponent.innerHTML = console.log(error);
        });
}

Contact()