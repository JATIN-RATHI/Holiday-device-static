import axios from "axios";

export default {
    enquiryFormSubmit(query) {
        return axios.post(process.env.CTF_SERVER_IP, query)
    }
}