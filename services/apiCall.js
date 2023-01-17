import axios from "axios";

export default {
    enquiryFormSubmit(query) {
        return axios.post('https://13.235.165.136/', query)
    }
}