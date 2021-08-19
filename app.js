function updateProductNumber(device, price, isIncrease) {
    const productInput = document.getElementById(device + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const caseTotal = document.getElementById(device + '-total');
    caseTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();


}

function getInputValue(device) {
    const phoneInput = document.getElementById(device + '-number');
    const phoneNumber = phoneInput.value;
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal / 100) * 10;
    const totalPrice = subTotal + tax;

    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalPrice;
}

// phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})