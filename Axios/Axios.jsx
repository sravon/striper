import axios from 'axios'
// import { base_url } from '../Data/Data';
const url = process.env.Stripe_Api_URL;

const Axios = axios.create({
    baseURL: url
})

export default Axios;