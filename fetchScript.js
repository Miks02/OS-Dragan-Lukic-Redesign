 function loadHTML(selector, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        
        })
        .catch(error => console.error('Greška pri učitavanju:', error));
}



// Učitaj header i footer
loadHTML('.header-container', 'header.html');
loadHTML('.footer', 'footer.html');