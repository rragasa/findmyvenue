import axios from 'axios';
import { apiURL } from '../../config.json';

export const venueDetailsApi = (id, payload) => axios.get(`${apiURL}v2/venues/${id}?${new URLSearchParams(payload)}`);
