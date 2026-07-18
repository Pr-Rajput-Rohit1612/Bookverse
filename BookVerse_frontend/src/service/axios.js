import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://bookverse-k8pa.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export default api;