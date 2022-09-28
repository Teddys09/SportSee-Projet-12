import { useEffect, useState } from 'react';
import Axios from 'axios';

/**
 * Fetch data from an API Using Axios
 * @param {String} url
 * @returns {Object} data
 */
const useFetch = (url) => {
  // http://localhost:3000/user/12
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return data;
};

export default useFetch;
