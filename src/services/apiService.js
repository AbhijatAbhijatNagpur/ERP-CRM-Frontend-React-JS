/* eslint-disable no-useless-catch */
// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://erp-crm-backend-nodejs.onrender.com/api';


export const getFinancialData = async (date) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/finance/getCalenderdata`, {
      params: { date }, 
    });
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const getFinancialYearData = async (date) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/finance/getFinancialdata`, {
        params: { date }, 
      });
      return response.data; 
    } catch (error) {
      throw error;
    }
  };    

  export const getTopProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/getTopProducts`); 
      return response.data; 
    } catch (error) {
      throw error;
    }
  };

  export const getTopCustomers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customer/getTopCustomer`); 
      return response.data; 
    } catch (error) {
      throw error;
    }
  };
  export const getEarningsData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/earningPerProduct`); 
      return response.data; 
    } catch (error) {
      throw error;
    }
  };