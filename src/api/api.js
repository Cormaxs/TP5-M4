import axios from "axios";
const baseUrl = "https://67efd81f2a80b06b8895fce5.mockapi.io/Api/v1/graficas";
    

export async function API_GET(){
    try{
       const peticion =await axios.get(baseUrl);
       return peticion.data;
    }catch(err){
        console.err(err)
    }
}



export async function API_GET_ID(id){
    try{
       const peticion =await axios.get(`${baseUrl}/${id}`);
       return peticion.data;
    }catch(err){
        console.err(err)
    }
}



export async function API_POST(datos){
    try{
       const peticion =await axios.post(`${baseUrl}`, datos);
       return peticion.data;
    }catch(err){
        console.err(err)
    }
}


export async function API_PUT_ID(id, datos){
    try{
       const peticion =await axios.put(`${baseUrl}/${id}`, datos);
       return peticion.data;
    }catch(err){
        console.err(err)
    }
}



export async function API_DELETE_ID(id){
    try{
       const peticion =await axios.delete(`${baseUrl}/${id}`);
       return peticion.data;
    }catch(err){
        console.err(err)
    }
}
