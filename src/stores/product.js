
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    guaranteeProducts:[],
    productDetail:[],
  }),
  actions: {
    async fetchProductData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.guaranteeProducts = data.data;
    },
    async fetchAllProducts(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.products = data.data;
    },
    async fetchAllProductById(param) {
      const response = await fetch(`https://admin.archi.uz/api/products/${param}`);
      const data = await response.json();
      this.productDetail = data.data;
    },
  },
});
