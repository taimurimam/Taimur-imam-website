// api.js
// Class-based centralized API client using axios
// Place this file in `src/api/api.js` (or `src/services/api.js`) and import the default instance where needed.

import axios from "axios";
//https://smartappsplanet.com/api/get-all-portfolio-list
class ApiService {
  constructor({ baseURL = process.env.REACT_APP_API_BASE_URL || "https://smartappsplanet.com/api/", timeout = 15000 } = {}) {
    this.client = axios.create({
      baseURL,
      timeout,
      headers: { "Content-Type": "application/json" },
    });

    // Attach request/response interceptors
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        // Centralized handling (example: clear token on 401)
        if (error.response && error.response.status === 401) {
          this.clearAuthToken();
          // Optionally, emit an event or call a callback to notify the app
        }
        return Promise.reject(error);
      }
    );
  }

  // -----------------------------
  // Token helpers (default: localStorage)
  // -----------------------------
  getToken() {
    try {
      return localStorage.getItem("auth_token");
    } catch (e) {
      return null;
    }
  }

  setAuthToken(token) {
    if (!token) return;
    try {
      localStorage.setItem("auth_token", token);
      this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.warn("Failed to set token", e);
    }
  }

  clearAuthToken() {
    try {
      localStorage.removeItem("auth_token");
      delete this.client.defaults.headers.common.Authorization;
    } catch (e) {
      console.warn("Failed to clear token", e);
    }
  }

  // -----------------------------
  // Generic request helpers
  // -----------------------------
  async get(url, params = {}, config = {}) {
    const response = await this.client.get(url, { params, ...config });
    return response.data;
  }

  async post(url, data = {}, config = {}) {
    const response = await this.client.post(url, data, config);
    return response.data;
  }

  async put(url, data = {}, config = {}) {
    const response = await this.client.put(url, data, config);
    return response.data;
  }

  async delete(url, config = {}) {
    const response = await this.client.delete(url, config);
    return response.data;
  }

  async upload(url, formData, config = {}) {
    const cfg = { headers: { "Content-Type": "multipart/form-data" }, ...config };
    const response = await this.client.post(url, formData, cfg);
    return response.data;
  }

  // -----------------------------
  // Example: Domain-specific API methods
  // -----------------------------

  // Portfolios
  async getPortfolios() {
    try {
      // Replace '/portfolios' with your real endpoint
      const data = await this.get("get-all-portfolio-list");
      // Example data path: data.data.portfolio_list
      // Return normalized payload for consumers
      return (data && data.data && data.data.portfolio_list) || data.portfolio_list || data;
    } catch (error) {
      console.error("getPortfolios error:", error);
      throw error;
    }
  }

  async getPortfolioById(id) {
    try {
      const data = await this.get(`/portfolios/${id}`);
      return data;
    } catch (error) {
      console.error("getPortfolioById error:", error);
      throw error;
    }
  }

  async createPortfolio(payload) {
    try {
      const data = await this.post("/portfolios", payload);
      return data;
    } catch (error) {
      console.error("createPortfolio error:", error);
      throw error;
    }
  }

  async updatePortfolio(id, payload) {
    try {
      const data = await this.put(`/portfolios/${id}`, payload);
      return data;
    } catch (error) {
      console.error("updatePortfolio error:", error);
      throw error;
    }
  }

  async deletePortfolio(id) {
    try {
      const data = await this.delete(`/portfolios/${id}`);
      return data;
    } catch (error) {
      console.error("deletePortfolio error:", error);
      throw error;
    }
  }

  // -----------------------------
  // More domain APIs (examples)
  // Add other API functions here following the same pattern
  // -----------------------------
  // e.g. Auth
  async login(credentials) {
    try {
      const data = await this.post("/auth/login", credentials);
      // if server returns token, set it automatically
      if (data && data.token) this.setAuthToken(data.token);
      return data;
    } catch (error) {
      console.error("login error:", error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.post("/auth/logout");
    } catch (e) {
      // swallow or log logout errors
      console.warn("logout failed", e);
    } finally {
      this.clearAuthToken();
    }
  }
}

// Export a single shared instance (singleton)
const API = new ApiService();
export default API;

/*
USAGE (in your React components):

import api from '../api/api';

// 1) Fetch portfolios
useEffect(() => {
  let mounted = true;
  api.getPortfolios()
    .then(list => { if (mounted) setPortfolios(list); })
    .catch(console.error);
  return () => { mounted = false; };
}, []);

// 2) Create portfolio
const create = async () => {
  try {
    const res = await api.createPortfolio({ name: 'New', ... });
    // handle res
  } catch (e) { console.error(e); }
};

// 3) Login
const resp = await api.login({ email, password });
// token is set automatically if server returns data.token

*/
