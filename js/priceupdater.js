
const paquetes = require ("./js/paquetes");

async function getProducts() {
  console.log("entered to getProducts function.");
  try {
    const resProducts = await fetch("https://arq.highdatamx.com:3000/api/v1/products");
    const products = await resProducts.json();
    if(!products) console.log("No products received");
    else {
      console.log("Products: " + JSON.stringify(products,null,4));
    }
  } catch (err) {
    console.log(err);
  }
}

function refresh(){
  getProducts();
}
