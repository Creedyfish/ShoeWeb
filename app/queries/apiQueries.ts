export const getfeatProds = async () => {
    const res = await fetch("http://localhost:3000/api", {
      method: "GET",
      cache: "no-cache",
    });
  
    return res.json();
  };
  

  