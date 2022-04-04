import axios from "axios";



export default axios.create({
    baseURL: `https://kxk-projet-default-rtdb.firebaseio.com`
})