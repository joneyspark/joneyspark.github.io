calculatetotalPrice();

function handleProductChange(valueId, productPrice, isIncrease){
    const phoneValue = document.getElementById(valueId);
    const phoneValueNumber = parseInt(phoneValue.value);
    let phoneCount = 0;
    if(isIncrease == true){
        phoneCount = phoneValueNumber + 1;
    }
    else if(isIncrease == false && phoneValueNumber > 0){
        phoneCount = phoneValueNumber - 1;
    }

    document.getElementById(valueId).value = phoneCount;

    const phonePrice = document.getElementById("phonePrice").getAttribute("data-phone-price");
    const phonePriceNumber = parseInt(phonePrice);
    
    const casePrice = document.getElementById("casePrice").getAttribute("data-case-price");
    const casePriceNumber = parseInt(casePrice);

    let phoneItemPrice;

    if(productPrice == 'phone'){

        phoneItemPrice = phoneCount * phonePriceNumber;
        document.getElementById("phonePrice").innerText = phoneItemPrice;
    }
    else{
        phoneItemPrice = phoneCount * casePriceNumber;
        document.getElementById("casePrice").innerText = phoneItemPrice;
    }

    calculatetotalPrice();

}

function calculatetotalPrice(){
    const phoneInput = document.getElementById("phoneValue").value;
    const phoneCount = parseInt(phoneInput);

    const caseInput = document.getElementById("caseValue").value;
    const caseCount = parseInt(caseInput);

    const phonePrice = document.getElementById("phonePrice").getAttribute("data-phone-price");
    const phonePriceNumber = parseInt(phonePrice);
    
    const casePrice = document.getElementById("casePrice").getAttribute("data-case-price");
    const casePriceNumber = parseInt(casePrice);

    const total = phoneCount * phonePriceNumber + caseCount * casePriceNumber;

    document.getElementById('total').innerText = total;

    let tax = total * 0.1;
    let taxInt = Math.round(tax);

    document.getElementById('tax').innerText = taxInt;

    const grandTotal = total + taxInt;

    document.getElementById('grandtotal').innerText = grandTotal;

    //return grandTotal;


}