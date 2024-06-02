// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
// Ambil elemen untuk menampilkan produk
const productsList = document.getElementById('products-list');

// Jalankan fungsi ketika tombol beli ditekan
productsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const productId = e.target.dataset.productId;
        // Tampilkan produk yang dipilih
        const product = products.find((product) => product.id === parseInt(productId));
        if (product) {
            // Tampilkan detail produk
            const productDetail = document.createElement('div');
            productDetail.innerHTML = `
                <h1>${accecories.gelang}</h1>
                <p>${accecories.bahan lembut}</p>
                <p>Rp. ${accecories.35.000}</p>
                <button>BUY NOW</button>
            `;
            document.body.appendChild(productDetail);
        }
    }
});
