import axios from "axios";

export default {
  async get(path, options = {}) {
    try {
      const response = await axios.get(path, options);
      return response;
    } catch (error) {
      return new Error(error);
    }
  }
};

