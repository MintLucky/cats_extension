document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById('closeButton');
    var xhr = new XMLHttpRequest();
    var checkPageButton = document.getElementById('newCat');
    var catImage = document.getElementById('catImage');
    var title = document.getElementById('title');
    closeButton.addEventListener('click', function() {
        window.close();
    }, false);
    checkPageButton.addEventListener('click', function() {
        xhr.open("GET", "http://thecatapi.com/api/images/get?format=src&type=gif", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4)
            {
                catImage.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
                title.innerHTML = "And this furry little pussy wants to cheer up you too :)";
            }
        };
        xhr.send();
    }, false);
}, false);
