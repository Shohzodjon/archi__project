
import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [],
    slides:[]
  }),
  actions: {
    async fetchNewsData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.news = data.data;
    },
    async fetchSlidesData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.slides = data.data;
    },
  },
});
