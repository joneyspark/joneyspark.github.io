// Subtoal calculation Function
totalPrice("phone", "silicon", "subtotal");

//iPhone evetn listner & Calculation

const btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener("click", function(){
    const qtyValue = document.getElementById("qtyValue").value;
    const qtyNumber = parseFloat(qtyValue) + 1;
    document.getElementById("qtyValue").value = qtyNumber;

    calcPlusMinus(qtyNumber, "phone", "data-price-phone");

    
    totalPrice("phone", "silicon", "subtotal");

});

const btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener("click", function(){
    const qtyValue = document.getElementById("qtyValue").value;
    if(qtyValue > 0){
        const qtyNumber = parseFloat(qtyValue) - 1;
        document.getElementById("qtyValue").value = qtyNumber;

        calcPlusMinus(qtyNumber, "phone", "data-price-phone");

        totalPrice("phone", "silicon", "subtotal");

    }
});

// iPhone Silicon evetn listner & Calculation

const siliconPlus = document.getElementById("siliconPlus");
siliconPlus.addEventListener("click", function(){
    const siliconQtyValue = document.getElementById("siliconQtyValue").value;
    const qtyNumberSilicion = parseFloat(siliconQtyValue) + 1;
    document.getElementById("siliconQtyValue").value = qtyNumberSilicion;
    calcPlusMinus(qtyNumberSilicion, "silicon", "data-price-silicon");
    totalPrice("phone", "silicon", "subtotal");
});

const siliconMinus = document.getElementById("siliconMinus");
siliconMinus.addEventListener("click", function(){
    const siliconQtyValue = document.getElementById("siliconQtyValue").value;
    if(siliconQtyValue > 0){
        const qtyNumberSilicion = parseFloat(siliconQtyValue) - 1;
        document.getElementById("siliconQtyValue").value = qtyNumberSilicion;
        calcPlusMinus(qtyNumberSilicion, "silicon", "data-price-silicon");
        totalPrice("phone", "silicon", "subtotal");

    }
});



function calcPlusMinus(qtyNumber, id, dataPrice){
    const phoneValue = document.getElementById(id).getAttribute(dataPrice);
    const phoneAmount = parseFloat(phoneValue);
    const phoneTotalAmount = (qtyNumber*phoneAmount);
    document.getElementById(id).innerText = phoneTotalAmount;
    return phoneTotalAmount;
}

// Total Calculation

function totalPrice(){
    
    let subPlusPhone = document.getElementById(phoneId).innerText;
    let subPlusPhoneNumber = parseFloat(subPlusPhone);
    let subPlusSilicon = document.getElementById(slicionId).innerText;
    let subPlusSiliconNumber = parseFloat(subPlusSilicon);
    let subtotal = subPlusPhoneNumber + subPlusSiliconNumber;
    document.getElementById(subtotalId).innerText = subtotal;
}

function totalPrice(phoneId, siliconId, subtotalId){
    let subPlusPhone = document.getElementById(phoneId).innerText;
    let subPlusPhoneNumber = parseFloat(subPlusPhone);
    let subPlusSilicon = document.getElementById(siliconId).innerText;
    let subPlusSiliconNumber = parseFloat(subPlusSilicon);
    let subtotal = subPlusPhoneNumber + subPlusSiliconNumber;

    document.getElementById(subtotalId).innerText = subtotal;
    document.getElementById("total").innerText = subtotal;

    return subtotal;
}

// remove Item

let removeItem = document.getElementsByClassName('remove-item');

for (let i = 0; i < removeItem.length; i++) {
    const removeElement = removeItem[i];
    removeElement.addEventListener("click", function(e){
        e.target.parentNode.parentNode.parentNode.style.display = "none";
    });
    
}