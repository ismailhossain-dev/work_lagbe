import axios from 'axios'

//just follow axios docs and axios/create-an-instance
  const axiosSecure = axios.create({
        baseURL: "http://localhost:3000"
})
function useAxiosSecure() {
  
  return  axiosSecure; 
}

export default useAxiosSecure