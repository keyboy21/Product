import axios from 'axios'

export const productFetcher = (url, token) => axios.get(url, { headers: { Authorization: "Bearer " + token } }).then((res) => res.data);
