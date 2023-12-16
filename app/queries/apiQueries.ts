export const getfeatProds = async () => {
    const res = await fetch("http://localhost:3000/api", {
      method: "GET",
      // cache: "no-cache",
    });
  
    return res.json();
  };
  
export const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/product", {
      method: "GET",
      // cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }

export const getProdById = async (id:string) => {

  const res = await fetch(`http://localhost:3000/api/product/${id}`, {
    method: "GET",
    // cache: "no-cache",
  });

  return res.json();
}
