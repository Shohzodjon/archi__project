
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    guaranteeProducts:[]
  }),
  actions: {
    async fetchProductData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.guaranteeProducts = data.data;
    },
  },
});
