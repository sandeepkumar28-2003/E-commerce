let product=[];

function fetchData() {
  fetch("https://dummyjson.com/product")
  .then((res)=>{
    return res.json();
  })
  .then((v)=>{
    console.log(v.products);
    product=v.products;

    localStorage.setItem("allproducts",JSON.stringify(product));
    displayProduct(product);
  });
}

function displayProduct(prod) {
  // console.log(prod);
  let output="";
  prod.map((val)=>{
    output+=`
        <main id="container">
          <img id="image" src="${val.thumbnail}">
          <section>
            <h3 id="title">${val.title}</h3>
            <div id="box">
              <p id="rating">Rating: ${val.rating}</p>
              <p>₹${Math.round(val.price)*90}</p>
            </div>
            <div id="root">
              <p>Instock :  ${val.stock}</p1>
              <button onclick="viewMore(${val.id})">Detail</button>
            </div>
          </section>
        </main>
    `;
  });
  document.getElementById("productContainer").innerHTML=output;
}
fetchData();

document.getElementById("searchProduct").addEventListener("input",(e)=>{
  let searchTerm=e.target.value.toLowerCase();
  let filterProduct=product.filter((v)=>{
    return(
      v.title.toLowerCase().includes(searchTerm)||v.category.toLowerCase().includes(searchTerm)
    );
  });
  displayProduct(filterProduct);
});

function viewMore(id) {
  console.log(id);
  localStorage.setItem("productid",id);
  window.location.href="../Details/details.html"
}