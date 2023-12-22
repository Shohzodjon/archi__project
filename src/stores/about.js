
import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => ({
    about: [],
    certificate:[],
  }),
  actions: {
    async fetchAboutData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.about = data.data;
    },
    async fetchSertificateData(param) {
        const response = await fetch(`https://admin.archi.uz/api/${param}`);
        const data = await response.json();
        this.certificate = data.data;
      },
  },
});