// import axios from "axios";

const BASE_URL = 'https://my-json-server.typicode.com/modanisatech/bootcamp-db';

axios
  .get(`${BASE_URL}/products`)
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field

    console.clear();
    console.log(response);

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const { data : products } = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((product) => console.log(product.name));
    

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products
      .filter(x=>x.name.includes("Şal"))
      .map((product)=>({
          name : product.name,
          image : product.image
        })
      );
    console.log(mappedProducts);

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish

    function getProduct(name, image){
      const product = document.getElementById("product");
      const div= document.createElement("div");
      const header = document.createElement("span");
      const img = document.createElement("img");
      img.src=image;
      img.alt = name;

      const headerContent = document.createTextNode(name);
      header.appendChild(headerContent);
      div.appendChild(header);

      div.appendChild(img);
      product.appendChild(div);
    }

    mappedProducts.forEach((product)=>getProduct(product.name, product.image));
    
  });
