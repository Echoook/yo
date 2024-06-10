import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getAll(entity) {
    return apiClient.get(`/${entity}`);
  },
  get(entity, id) {
    if(id) {
      return apiClient.get(`/${entity}/${id}`);
    }
  },
  create(entity, data) {
    return apiClient.post(`/${entity}`, data);
  },
  update(entity, id, data) {
    return apiClient.put(`/${entity}/${id}`, data);
  },
  delete(entity, id) {
    return apiClient.delete(`/${entity}/${id}`);
  }
};
