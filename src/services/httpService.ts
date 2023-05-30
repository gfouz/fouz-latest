import axios from 'axios';
import { DTO, FormData } from 'interfaces/interfaces';

type id_t = string | undefined;
type st = string;

const BASE_URL = 'http://localhost:4000';

//const jwt = localStorage.getItem('jwt');
// Empty value is to be validated by the express middleware.
//const token = jwt ? jwt : 'empty';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export async function contactPostService(
  data: ContactData
): Promise<ContactData | any> {
  try {
    const res = await axios.post<ContactData>(
      'https://formspree.io/f/xdovlonj',
      data
    );
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}
export async function getService(path: st): Promise<DTO[] | any> {
  try {
    const res = await axiosApi.get<DTO[]>(path);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function postService(
  path: st,
  data: FormData
): Promise<FormData | any> {
  try {
    const res = await axiosApi.post<DTO>(path, data);
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function updateService(
  data: FormData,
  path: st,
  id: id_t
): Promise<FormData | any> {
  try {
    const res = await axiosApi.put<FormData>(`/${path}/${id}`, data);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}
export async function find(path: st, id: id_t): Promise<FormData | any> {
  try {
    const res = await axiosApi.get<DTO>(`/${path}/${id}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

/* Do not repeat yourself, but here is a kind of
     convention. */
export async function getEnabled(path: st): Promise<FormData[] | any> {
  try {
    const res = await axiosApi.get<FormData[]>(path);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function getByDoubleAssociation(
  id: id_t
): Promise<FormData | any> {
  try {
    const res = await axiosApi.get<FormData>(
      `/empresas-instituciones/municipio/${id}`
    );
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export const getServerMessage = (
  message: any,
  setStatus: { (value: React.SetStateAction<st>): void; (args: any): void }
) => {
  setStatus(message);
};

export async function downloadVaucher(ci: id_t): Promise<any> {
  try {
    const res = await axios.get<any>(`http://localhost:4000/voucher`, {
      responseType: 'blob',
    });
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}
export async function deleteService(url: st, id: id_t): Promise<id_t | any> {
  try {
    const res = await axiosApi.delete<id_t>(`/${url}/${id}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

//npm install eslint-plugin-unused-imports --save-dev
