const API_URL = "http://localhost:3001";

export async function getProducts(){
  try{
    const res = await fetch(`${API_URL}/products`)
    //se la risposta non è OK lancio l'errore
    if(!res.ok){
        throw new Error("Errore nel recupero dei prodotti")
    }
    return await res.json();

  } catch(err){
    console.error("Qualcosa è andato storto nella risposta del fetch", err);
    return[];
    
  }
}


export async function getProductsById(id){
  try{
    const res = await fetch(`${API_URL}/products/${id}`)

    //se la risposta non è OK allora lancio l'errore
    if(!res.ok){
      throw new Error("Errore nel recupero dati ")
    }
    return await res.json();

  } catch(err){
    console.error("Qualcosa è andato storto nella risposta del fetch ID", err);
    return null;
    
  }
}