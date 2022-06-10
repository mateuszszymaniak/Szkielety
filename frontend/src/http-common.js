import axios from "axios"

export default axios.create({
    baseURL: "http:/localhost:3000/api/v1/project",
    Headers: {
        "Content-type": "application/json"
    }
});