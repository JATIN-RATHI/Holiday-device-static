import axios from "axios";

export default {
    enquiryFormSubmit(query) {
        return axios.post('https://server.holidaydevice.com/', query)
    }
}