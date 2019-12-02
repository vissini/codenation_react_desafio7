import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/data"
});

const getThreads = async (  ) => {
  try{
    const { data } = await API.get(`/threads.json`);
    return data;
  }catch (error){
    return null;

  }
};

const getThreadBySlug = async ( slug ) => {
  try{
    console.log(slug);
    const { data } = await API.get(`/thread.json`);
    let dataResult = data.filter(result => {
      return result.slug === slug
    })
    return dataResult;
  }catch (error){
    return null;

  }
};

export { getThreads, getThreadBySlug };
