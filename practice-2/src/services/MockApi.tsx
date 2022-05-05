import { ICar } from "../interfaces/ICar";
import { API_BASE_URL } from '../constants/apiUrl'

enum MethodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

// call api to post data server
export const PostData = async (data: ICar) => {
  const response = await fetch(API_BASE_URL, {
    method: MethodType.POST,
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json;
};
