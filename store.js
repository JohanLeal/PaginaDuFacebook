/*document.addEventListener('DOMContentLoaded', function() {
    // Manejador de clics en botones de contacto
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('¡Has contactado al vendedor!');
        });
    });

    // Filtrado de productos por categoría (ejemplo)
    const filterItems = document.querySelectorAll('.filters ul li');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.innerText;
            const listings = document.querySelectorAll('.listing');
            listings.forEach(listing => {
                const listingCategory = listing.querySelector('h3').innerText;
                if (listingCategory === category) {
                    listing.style.display = 'block';
                } else {
                    listing.style.display = 'none';
                }
            });
        });
    });

    // Restablecer filtros
    const resetFilter = document.getElementById('reset-filter');
    resetFilter.addEventListener('click', function() {
        const listings = document.querySelectorAll('.listing');
        listings.forEach(listing => {
            listing.style.display = 'block';
        });
    });
});*/
