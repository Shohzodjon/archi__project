
import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [],
  }),
  actions: {
    async fetchNewsData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.news = data.data;
    },
  },
});
