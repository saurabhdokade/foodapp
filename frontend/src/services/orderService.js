import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://food-app-ijkw.vercel.app";

export const createOrder = async order => {
  try {
    const { data } = axios.post(`${API_BASE_URL}/api/orders/create`, order);
    return data;
  } catch (error) {}
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/api/orders/newOrderForCurrentUser`);
  return data;
};

export const pay = async paymentId => {
  try {
    const { data } = await axios.put('/api/orders/pay', { paymentId });
    return data;
  } catch (error) {}
};

export const trackOrderById = async orderId => {
  const { data } = await axios.get('/api/orders/track/' + orderId);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`/api/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`/api/orders/allstatus`);
  return data;
};
