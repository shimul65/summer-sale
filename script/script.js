// Product Card add to Cart with Total Price

let totalPrice = 0;
function addToCart(target) {
    target.style.transform = "scale(0.9)";
    setTimeout(function(){
        target.style.transform = "scale(1)" ;
    },200)
    target.classList.add('hover:scale-105');
    const cartContainer = document.getElementById("card-item");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const p = document.createElement('p')
    p.classList.add('my-3');
    const count = cartContainer.childElementCount;
    p.innerText = (count + 1) + ". " + itemName;
    cartContainer.appendChild(p)
    const productPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
    document.getElementById('total').innerText = totalPrice.toFixed(2);
    if (totalPrice > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled')
    }
    if (totalPrice >= 200) {
        document.getElementById('apply').removeAttribute('disabled')
    }
    return totalPrice;
}

// Apply Coupon Button Interactive

function applyCoupon() {
    const couponField = document.getElementById('coupon-field').value;
    if (couponField === 'SELL200') {
        document.getElementById('coupon-success').innerText = '*Coupon applied successfully'
        document.getElementById('coupon-field').value = '';
        const discount = totalPrice * 0.2;
        if (discount <= 200) {
            document.getElementById('discount').innerText = discount.toFixed(2);
            const total = totalPrice - discount;
            document.getElementById('total').innerText = total.toFixed(2);
        }
        else {
            document.getElementById('discount').innerText = 200;
            const total = totalPrice - 200;
            document.getElementById('total').innerText = total.toFixed(2);
        }
    }
    else {
        alert('Wrong Coupon Code');
        document.getElementById('coupon-field').value = '';
    }
}

// Go Home Button Interactive

function goHome() {
    location.reload();
}