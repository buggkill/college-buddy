import axios from "axios";


export default axios.create({
  //baseURL: 'https://mean-stack-backend123.herokuapp.com/api',
  baseURL: 'http://localhost:8000/',
  responseType: "json",
});


