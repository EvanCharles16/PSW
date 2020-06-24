function Sock() {
    let sockComponent = document.getElementById('socks');
    sockComponent.innerHTML = '';

    axios.get('/components/Product/sock.html')
        .then(function (response) {
            sockComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            sockComponent.innerHTML = console.log(error);
        });
}

Sock()