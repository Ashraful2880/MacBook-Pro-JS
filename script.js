
// // // // function For Update Price Value // // // // 

function updateCharge(item, charge) {
    const cost = document.getElementById(item);
    let costTotal = parseInt(cost.innerText);
    cost.innerText = charge;
}

// // // // function For Update Total Price // // // // 

function totalPrice() {
    const previousTotal = document.getElementById('total-price');

    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseInt(document.getElementById('extra-memory-total').innerText);
    const extraStorageCost = parseInt(document.getElementById('extra-storage-total').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge-total').innerText);
    const netPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    previousTotal.innerText = netPrice;

    const promoTotal = document.getElementById('promo-total');
    promoTotal.innerText = netPrice;
}

// // // // ClickHandler For Normal(8GB) Memory Button // // // // 

document.getElementById('memory-button').addEventListener('click', function () {
    updateCharge('extra-memory-total', 0);
    totalPrice();
})

// // // // ClickHandler For Extra (16GB) Memory Button // // // // 

document.getElementById('extra-memory-button').addEventListener('click', function () {
    updateCharge('extra-memory-total', 180);
    totalPrice();
})

// // // // ClickHandler For Normal(256GB) Storage Button // // // // 

document.getElementById('storage-button').addEventListener('click', function () {
    updateCharge('extra-storage-total', 0);
    totalPrice();
})

// // // // ClickHandler For Midium (512GB) Storage Button // // // // 

document.getElementById('storage-button-midium').addEventListener('click', function () {
    updateCharge('extra-storage-total', 100);
    totalPrice();
})

// // // // ClickHandler For High (1TB) Storage Button // // // // 

document.getElementById('storage-button-high').addEventListener('click', function () {
    updateCharge('extra-storage-total', 180);
    totalPrice();
})

// // // // ClickHandler For Free Delivery Button // // // // 

document.getElementById('free-delivery-button').addEventListener('click', function () {
    updateCharge('delivery-charge-total', 0);
    totalPrice();
})

// // // // ClickHandler For Urgent Delivery Button // // // // 

document.getElementById('urgent-delivery-button').addEventListener('click', function () {
    updateCharge('delivery-charge-total', 20);
    totalPrice();
})

// // // // Promo Code Script Here // // // // 

document.getElementById('promo-btn').addEventListener('click', function () {
    const productTotalPrice = parseInt(document.getElementById('total-price').innerText);
    const withoutPromoTotal = document.getElementById('promo-total');
    const promoInput = document.getElementById('promo-input').value;

    if (promoInput == 'stevekaku') {
        const discount = productTotalPrice - productTotalPrice * 20 / 100;
        withoutPromoTotal.innerText = discount;
    } else if (promoInput == '') {
        alert('Are You Sure To Miss The Promo Discount???');
    } else {
        alert('Wrong Promo Code !!! You Miss The Discount');
    }
});

