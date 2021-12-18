import api from '../../../http';

export const getWord = (word) => api.get(`/api/v2/entries/en/${word}`);
