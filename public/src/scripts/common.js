function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.log('Error loading component:', error));
}

window.onload = function() {
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');
    loadComponent('back-to-top', '/components/top.html');
};
