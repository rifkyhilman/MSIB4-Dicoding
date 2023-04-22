import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  MEDIUM_IMAGE: `${CONFIG.BASE_IMAGE_URL}/medium/`,
  LARGE_IMAGE: `${CONFIG.BASE_IMAGE_URL}/large/`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,

};

export default API_ENDPOINT;
