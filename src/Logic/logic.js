const axios = require('axios');


 export function toggle(value) {
    return !value;
  }
export function  addToCart(cart, product) {
  let newCart = [...cart]
  let newProduct={...product}
  let found = false;
  //add a qty property 
newProduct.qty = 1;
  //see if the newProduct exists in the cart
  newCart=newCart.map
  ((item)=>{
    if(item.id===newProduct.id){
      let newItem={...item}
      found=true;
      newItem.qty++;
      return newItem;
    }
    return item;
  })

  if(!found){
    newCart.push(newProduct);
  }
//push the item onto the cart
return newCart;
  }
export function  calculateSubTotal(product) {
      return product.price;
  }
export function  calculateTotal() {
    // Build me!
  }
export function  removeItem() {
    // Build me!
  }
