import axios from "axios";

const instance = axios.create({
    baseURL:"https://burger-builder-7b56e.firebaseio.com/"
})

export default instance;