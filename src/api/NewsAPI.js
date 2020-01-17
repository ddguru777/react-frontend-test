import axios from 'axios';
import * as c from './Constants';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onRetrieveNews = async (queryParam = '') => {
  const URL = `${c.API_URL}/articlesearch.json?api-key=${c.API_KEY}`;
  try {
    const { data } = await axios(
      URL,
      Object.assign({}, PARAMS({ methodType: 'GET' }), {
        queryParam,
      }),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export default { onRetrieveNews };
