

export const getAllProducts = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
export const getProductsByCategory = (category) => {
  return fetch(`https://dummyjson.com/products/category/${category}`).then(
    (res) => res.json()
  );
};
// export const getCart = () => {
//   return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
// };

// export const addToCart = (id) => {
//   return fetch("https://dummyjson.com/carts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       userId: 1,
//       products: [
//         {
//           id: id,
//           quantity: 1,
//         },
//       ],
//     }),
//   }).then((res) => res.json());
// };


// Import statements

export const getCart = () => {
  let cartItems = localStorage.getItem('cartItems');
  // Check if cartItems is null or undefined, or an empty string
  // if (!cartItems) {
  //   console.log("No cart added")
  //     // If cartItems is empty or not found, initialize it as an empty array in local storage
  //   localStorage.setItem('cartItems', JSON.stringify([]));
  //   // Return an empty array
  //   return Promise.resolve([]);
  // }
  // If cartItems is not empty, parse and return the cart items as an array
  return Promise.resolve(JSON.parse(cartItems));
};


export const addToCart = (id) => {
  // Get existing cart items from local storage
  const cartItems = getCart();
  console.log('Cart items:', cartItems);
  // Check if the item is already in the cart
  const existingItem = cartItems.find(item => item.id === id);
  console.log('Existing item:', existingItem);
  if (existingItem) {
    // If the item exists, increment its quantity
    existingItem.quantity += 1;
  } else {
    // If the item doesn't exist, add it to the cart with quantity 1
    cartItems.push({ id, quantity: 1 });
  }
  // Store the updated cart items back in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
