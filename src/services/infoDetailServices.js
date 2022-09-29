import axios from "axios";
const baseURL = "https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0";

export const restroomServices = {
  getAllRestrooms() {
    const restrooms = axios.get(baseURL).then((res) => res.data);
    return restrooms;
  },

  getRestroomByQuery(query) {
    const restrooms = axios.get(baseURL +"&query=" + query).then((res) => res.data);
    return restrooms;
  }

};