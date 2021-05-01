import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:5001/clone-1b94d/us-central1/api", //the API (Cloud function) URL >> local API(test http://localhost:5001/clone-1b94d/us-central1/api)
});

export default instance;