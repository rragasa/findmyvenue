import axios from 'axios';
import { apiURL } from '../../config.json';

export const searchVenue = (payload) => {
  return axios.get(`${apiURL}v2/venues/search?` + new URLSearchParams(payload));
};