import request from 'request';

const APP_ID = process.env.TRANSPORT_APP_ID;
const APP_KEY = process.env.TRANSPORT_APP_KEY;
const BASE_URL = 'http://transportapi.com/v3/uk';

const executeRequest = (path, data) =>
  new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      uri: `${BASE_URL}/${path}`,
      qs: {
        ...data,
        app_id: APP_ID,
        app_key: APP_KEY,
      },
    };

    return request(options, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(JSON.parse(response.body));
    });
  });

export default executeRequest;
