import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const url = 'https://vercel-api-proxy-six-fawn.vercel.app/api/proxy';
  const params = {
    source: 'pixabay',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  const response = await axios.get(url, { params });
  return response.data;
}
