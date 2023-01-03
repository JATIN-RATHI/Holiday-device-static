import axios from "axios";

export default {
    enquiryFormSubmit(query) {
        return axios.post('http://localhost:4000/', query)
    }
}