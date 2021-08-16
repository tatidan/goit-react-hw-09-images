import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchPhotos = async ({ searchQuery = "", currentPage = 1 }) => {
  try {
    const searchURL = `${BASE_URL}/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    return await axios.get(searchURL).then((response) => response.data.hits);
  } catch (error) {
    console.log(error);
  }
};

export default fetchPhotos;
