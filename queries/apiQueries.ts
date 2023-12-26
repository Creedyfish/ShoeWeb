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
    cache: "no-cache",
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
  console.log("delete Featured api querue",id);
  const res = await fetch(`${API_URL}/product/featured/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });

  return res.json();
}