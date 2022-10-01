import axios from "axios"

export const getData = async (url,options)=>{
  const results = await axios.get(url,options)
  return results.data
}