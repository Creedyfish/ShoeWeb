import { API_URL } from "@/utils/constants";
/**
 * Fetches a list of featured products from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of featured products.
 */
export const getfeatProds = async () => {
    const res = await fetch(`${API_URL}`, {
      method: "GET",
      cache: "no-cache",
    });
  
    return res.json();
  };
/**
 * Fetches a list of all products from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export const getProducts = async () => {
    const res = await fetch(`${API_URL}/product`, {
      method: "GET",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }
/**
 * Fetches a product by its ID from the API.
 * @param {string} id - The ID of the product.
 * @returns {Promise<Object>} A promise that resolves to the product object.
 */
export const getProdById = async (id:string) => {

  const res = await fetch(`${API_URL}/product/${id}`, {
    method: "GET",
    cache: "no-cache"
  });

  return res.json();
}
/**
 * Inserts or updates a product in the API.
 * @param {Object} product - The product object to be inserted or updated.
 * @returns {Promise<Object>} A promise that resolves to the inserted or updated product.
 */
export const upsertProduct = async (product: any) => {
  
  const res = await fetch(`${API_URL}/product`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
    
    
  });

  return res.json();
}
/**
 * Deletes a product from the API by its ID.
 * @param {number} id - The ID of the product to be deleted.
 * @returns {Promise<Object>} A promise that resolves to the deleted product.
 */
export const deleteProduct = async (id: number) => {
  const res = await fetch(`${API_URL}/product/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });

  return res.json();
}
/**
 * Deletes a featured product from the API by its ID.
 * @param {number} id - The ID of the featured product to be deleted.
 * @returns {Promise<Object>} A promise that resolves to the deleted featured product.
 */
export const deleteFeaturedProduct = async (id: number) => {
  const res = await fetch(`${API_URL}/product/featured/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });

  return res.json();
}
/**
 * Adds a user to the shopping cart in the API.
 * @param {Object} user - The user object to be added to the cart.
 * @returns {Promise<Object>} A promise that resolves to the added user in the cart.
 */
export const addCart = async (user: any) => {
  
  const res = await fetch(`${API_URL}/cart`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
/**
 * Deletes a specific item from the user's shopping cart in the API.
 * @param {string} userId - The ID of the user.
 * @param {number} productId - The ID of the product to be removed from the cart.
 * @returns {Promise<Object>} A promise that resolves to the removed cart item.
 */
export const deleteCartItem = async (userId: string, productId: number) => {
  const res = await fetch(`${API_URL}/cart`, {
    method: "DELETE",
    body: JSON.stringify({ userId, productId }),
    headers: {
      "Content-Type": "application/json",
    },
    
  });

  return res.json();
};
/**
 * Fetches the shopping cart for a specific user from the API.
 * @param {string} id - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user's shopping cart.
 */
export const getCart = async (id: string) => {
  
  const res = await fetch(`${API_URL}/cart/${id}`, {
    method: "GET",
    cache: "no-cache",
  });

  return res.json();
};
/**
 * Adds an order to the API.
 * @param {Object} order - The order object to be added.
 * @returns {Promise<Object>} A promise that resolves to the added order.
 */
export const addOrder = async (order:any) => {
  
  const res = await fetch(`${API_URL}/order`,{
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json"
    },
    });
  return res.json();
}