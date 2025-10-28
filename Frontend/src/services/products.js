import { http } from "@/services/http";

export const ProductsAPI = {
  list: async (params = {}) => {
    const { data } = await http.get("/products", { params });
    return data; // nếu backend trả Page<Product> => có content, totalPages...
  },
  get: async (id) => {
    const { data } = await http.get(`/products/${id}`);
    return data;
  },
};
