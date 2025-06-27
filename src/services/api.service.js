import axios from "./axios.customize";


const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = { fullName, email, password, phone };
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = () => {

}

const fetchUserAPI = () => {
    return axios.get("/api/v1/user");
};


export {
    createUserAPI, updateUserAPI, fetchUserAPI
}