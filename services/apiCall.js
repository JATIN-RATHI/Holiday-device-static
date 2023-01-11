import axios from "axios";

export default {
    enquiryFormSubmit(query) {
        return axios.post('https://13.126.124.168:4000/', query)
    }
}