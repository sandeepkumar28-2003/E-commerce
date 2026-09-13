document.addEventListener("DOMContentLoaded",()=>{
  let allproducts=JSON.parse(localStorage.getItem("allproducts"));
  let productId=localStorage.getItem("productid");
  let productDetails=document.getElementById("productDetails");
  // console.log(allproducts,productId,productDetails);

  if (allproducts && productId) {
    let selectedProduct = allproducts.find((v)=>{
      return v.id==productId;
    });
    if (selectedProduct) {
      console.log(selectedProduct);
      
      let price=Math.round(selectedProduct.price*90);
      productDetails.innerHTML=`
          <main id="container">
            <section>
              <img src="${selectedProduct.thumbnail}"">
              <div>
                <h1>${selectedProduct.title}</h1>
                <p><b>Brand: </b>${selectedProduct.brand}</p>
                <p><b>Description: </b>${selectedProduct.description}</p>
                <p><b>Category :</b>${selectedProduct.category}</p>
                <p><b>Price :</b>₹${price}</p>
                <button id="addToCart">Add to Cart</button>
                <button id="backToHome">Back to Home</button>
              </div>
            </section>
            <aside>
              <h1>Customer reviews</h1>
              <hr>
              <p>${"❤️".repeat(selectedProduct.reviews[0].rating)+"🖤".repeat(5-selectedProduct.reviews[0].rating)}</p>
              <p>${selectedProduct.reviews[0].comment}</p>
              <p>${selectedProduct.reviews[0].reviewerName} ${selectedProduct.reviews[0].date}</p><hr>
              <p>${"❤️".repeat(selectedProduct.reviews[1].rating)+"🖤".repeat(5-selectedProduct.reviews[1].rating)}</p>
              <p>${selectedProduct.reviews[1].comment}</p>
              <p>${selectedProduct.reviews[1].reviewerName} ${selectedProduct.reviews[1].date}</p><hr>
              <p>${"❤️".repeat(selectedProduct.reviews[2].rating)+"🖤".repeat(5-selectedProduct.reviews[2].rating)}</p>
              <p>${selectedProduct.reviews[2].comment}</p>
              <p>${selectedProduct.reviews[2].reviewerName} ${selectedProduct.reviews[2].date}</p><hr>
            </aside>
          </main>
      `
    document.getElementById("backToHome").addEventListener("click",()=>{
      window.location.href="../Home/home.html"
    })
    document.getElementById("addToCart").addEventListener("click",()=>{
      addProductToCart(selectedProduct)
    })
    }else{
      productDetails.innerHTML="<p>Product Not Available.....</p>";
    }
  }else{
      productDetails.innerHTML="<p>Product Not Available.....</p>";
  }
   
});
function addProductToCart(product) {
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  cart.push(product);
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Product Added Sucessfully")
}

