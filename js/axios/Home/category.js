function Category() {
    let categoryComponent = document.getElementById('categoryComponent');
    categoryComponent.innerHTML = '';

    axios.get('/components/Home/category.html')
        .then(function (response) {
            categoryComponent.innerHTML = response.data;
        })
        .catch(function (error) {
            categoryComponent.innerHTML = console.log(error);
        });
}

Category()