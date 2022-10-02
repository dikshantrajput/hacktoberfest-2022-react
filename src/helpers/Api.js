import axios from "axios"

export const getData = async (url,options)=>{
  try{
    const results = await axios.get(url,options)
    return results.data;

  } catch(err) {
    throw new Error(err.message);
  }
}