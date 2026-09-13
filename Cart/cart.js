document.addEventListener("DOMContentLoaded",()=>{
  displayCart();
})

function displayCart() {
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let cartContent=document.getElementById("cartContent");
  let totalPrice=document.getElementById("totalPrice");

  let totalBill=0;

  if (cart.length==0) {
    cartContent.innerHTML="<p>Your cart is empty start shopping</p>"
    totalPrice.innerHTML=""
  }else{
    cart.map((v,i)=>{
      totalBill+=v.price;
      let newElement=document.createElement("div");
        newElement.setAttribute("class","prod-info");
        newElement.innerHTML=`
          <img src="${v.thumbnail}">
          <h1>${v.title}</h1>
          <button onclick="removeFromCart(${i})">Remove</button>
        `;
        cartContent.append(newElement);
        totalPrice.innerHTML=`<p>Total Amount is: ${Math.round(totalBill)*90}</p>`
    })
  }
}

function removeFromCart(i) {
  // console.log(i);
  let cart=JSON.parse(localStorage.getItem("cart"));
  cart.splice(i,1)
  localStorage.setItem("cart",JSON.stringify(cart));
  window.location.reload();
  
}