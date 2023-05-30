import axios from 'axios';

export interface FormData {
  name: string;
  email: string;
  message: string;
}
export async function contactService(data: FormData): Promise<FormData | any> {
  try {
    const res = await axios.post<FormData>(
      'https://formspree.io/f/xdovlonj',
      data
    );
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export const errorMsg = `
   from {
    background-color: transparent;
   }
   to {
    background-color: red;
   }
  `;
