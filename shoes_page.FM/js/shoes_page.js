function addToCart() {
    alert("Product added to cart!");
}
	
function toggleTheme() {
    var lightTheme = document.getElementById('light-theme');
    var darkTheme = document.getElementById('dark-theme');
    var themeToggleBtn = document.getElementById('theme-toggle');
    
    console.log("Light theme disabled:", lightTheme.disabled);
    console.log("Dark theme disabled:", darkTheme.disabled);
    
    if (lightTheme.disabled === false) {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
        themeToggleBtn.innerText = "Dark Mode";
    } else {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
        themeToggleBtn.innerText = "Light Mode";
    }
    
    console.log("Light theme disabled:", lightTheme.disabled);
    console.log("Dark theme disabled:", darkTheme.disabled);
}

	
function filterProducts() {
    var maxPrice = parseFloat(document.getElementById("maxPrice").value);
    var showOnSale = document.getElementById("showOnSale").checked;
    var showHotOffer = document.getElementById("showHotOffer").checked;
    var products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        var priceElement = product.querySelector('.price');
        var priceText = priceElement.textContent.trim();
        var priceValue = parseFloat(priceText.replace(/[^0-9.-]+/g,""));

        if (isNaN(priceValue) || priceValue < 0 || priceValue > 1000) {
            
            product.style.display = "none";
            return;
        }

        var isOnSale = product.querySelector('.sale-badge') !== null;
        var isHotOffer = product.querySelector('.offer-badge') !== null;

        if (priceValue <= maxPrice && 
            (showOnSale && isOnSale || !showOnSale) && 
            (showHotOffer && isHotOffer || !showHotOffer)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
	
var eventsData = [
    {
        name: "METGALA 2024",
        date: "MAY 6, 2024",
        time: "TBD",
        location: "New York City",
        details: "Sleeping Beauties: Reawakening Fashion."
    },
   
];


function populateEventsTable() {
    var tableBody = document.querySelector("#events-table tbody");
    
    eventsData.forEach(function(event) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${event.name}</td>
            <td>${event.date}</td>
            <td>${event.time}</td>
            <td>${event.location}</td>
            <td>${event.details}</td>
        `;
        tableBody.appendChild(row);
    });
}

populateEventsTable();

const productImages = document.querySelectorAll('.product img');
productImages.forEach(image => {
    image.addEventListener('click', function() {
        const productId = this.closest('.product').dataset.productId;
        
        const themePreference = getThemePreference();
		
        localStorage.setItem('theme', themePreference);
        localStorage.setItem('productId', productId);

        window.location.href = 'page_details1.html?id=' + productId;
    });
});
