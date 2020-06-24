function Support() {
    let supportComponent = document.getElementById('supportComponent');
    supportComponent.innerHTML = '';

    axios.get('/components/Home/support.html')
        .then(function (response) {
            supportComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            supportComponent.innerHTML = console.log(error);
        });
}

Support()