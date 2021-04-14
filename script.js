const productTotalAmount = document.getElementById("product-total-amount");
const total_amount_cart =document.getElementById("total_amount_cart")
const shippingCharge =document.getElementById("shipping-charge")

const decreaseNumber = (incDec,priceDec) =>{
      const itemVal = document.getElementById(incDec)
      const priceItem = document.getElementById(priceDec)
    if (itemVal.value <=0) {
        itemVal.value=0;
        alert("Negative value not allowed");
 }else{
        itemVal.value=parseInt(itemVal.value) - 1;
        itemVal.style.background="#fff";
        itemVal.style.color="black";
        priceItem.innerHTML=parseInt(priceItem.innerHTML) - 15;
        productTotalAmount.innerHTML=parseInt(productTotalAmount.innerHTML) - 15;
        total_amount_cart.innerHTML = parseInt(productTotalAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
    }
}

const increaseNumber = (incDec,priceInc) =>{
    const itemVal = document.getElementById(incDec)
    const priceItem = document.getElementById(priceInc)
  if (itemVal.value >= 5 ) {
      itemVal.value=5;
      alert("maximum 5 allowed");
        itemVal.style.background="red";
        itemVal.style.color="#fff";
  }else{
      itemVal.value=parseInt(itemVal.value) + 1;
      priceItem.innerHTML=parseInt(priceItem.innerHTML) + 15;
      productTotalAmount.innerHTML=parseInt(productTotalAmount.innerHTML) + 15;
      total_amount_cart.innerHTML = parseInt(productTotalAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
  }
}


const discount_Code = () => {
    const discountCode= document.getElementById("discount-code1")
    let errorTrw =document.getElementById("error_trw")
    let currentTotalAmount = parseInt( total_amount_cart.innerHTML);
 
    if (discountCode.value === 'shahadat') {
        let newCartAmount = currentTotalAmount - 15;
        total_amount_cart.innerHTML = newCartAmount;
        errorTrw.innerHTML="Hurrah ! Discount code is valid"
        errorTrw.className="text-success"
    }else{
           errorTrw.innerHTML ="Try Again ! valid code is shahadat"
           errorTrw.className="text-danger"
    }
}