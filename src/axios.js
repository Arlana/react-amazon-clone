import axios from "axios";


const instance = axios.create({
    baseURL: "https://us-central1-clone-1b94d.cloudfunctions.net/api", 
    //the API (Cloud function) URL >> local API(test http://localhost:5001/clone-1b94d/us-central1/api)
    // Deployed back end at https://us-central1-clone-1b94d.cloudfunctions.net/api
});

export default instance;

// firebase deploy --only functions => deploy only backend
// firebase deploy --only hosting => deploy APP(front end)