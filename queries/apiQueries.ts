import { API_URL } from "@/utils/constants";

export const getfeatProds = async () => {
    const res = await fetch(`${API_URL}`, {
      method: "GET",
      cache: "no-cache",
    });
  
    return res.json();
  };
  
export const getProducts = async () => {
    const res = await fetch(`${API_URL}/product`, {
      method: "GET",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }

export const getProdById = async (id:string) => {

  const res = await fetch(`${API_URL}/product/${id}`, {
    method: "GET",
    cache: "no-cache"
  });

  return res.json();
}

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

export const deleteProduct = async (id: number) => {
  const res = await fetch(`${API_URL}/product/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });

  return res.json();
}

export const deleteFeaturedProduct = async (id: number) => {
  const res = await fetch(`${API_URL}/product/featured/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });

  return res.json();
}

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

export const getCart = async (id: string) => {
  
  const res = await fetch(`${API_URL}/cart/${id}`, {
    method: "GET",
    cache: "no-cache",
  });

  return res.json();
};

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