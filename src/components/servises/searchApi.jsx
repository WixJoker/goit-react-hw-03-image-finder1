import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '25349801-93e8f8673522f488449b0dac2';

export const searchApiImg = async (search, page=1) => {
  const respons = await axios.get(
    `?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${search}&safesearch=true&per_page=12&page=${page}`
  );
  return await respons.data;
};