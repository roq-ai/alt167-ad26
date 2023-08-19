import axios from 'axios';
import queryString from 'query-string';
import { ItTechnicianInterface, ItTechnicianGetQueryInterface } from 'interfaces/it-technician';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getItTechnicians = async (
  query?: ItTechnicianGetQueryInterface,
): Promise<PaginatedInterface<ItTechnicianInterface>> => {
  const response = await axios.get('/api/it-technicians', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createItTechnician = async (itTechnician: ItTechnicianInterface) => {
  const response = await axios.post('/api/it-technicians', itTechnician);
  return response.data;
};

export const updateItTechnicianById = async (id: string, itTechnician: ItTechnicianInterface) => {
  const response = await axios.put(`/api/it-technicians/${id}`, itTechnician);
  return response.data;
};

export const getItTechnicianById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/it-technicians/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteItTechnicianById = async (id: string) => {
  const response = await axios.delete(`/api/it-technicians/${id}`);
  return response.data;
};
