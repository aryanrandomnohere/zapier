import axios from "axios";

export async function fetchZaps() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap`, {
    withCredentials: true,
  });
  return response.data.zaps;
}

export async function fetchDeletedZaps() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/trash`, {
    withCredentials: true,
  });
  return response.data.data;
}